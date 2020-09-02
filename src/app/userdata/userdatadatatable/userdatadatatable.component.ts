import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SrvUserService } from 'src/app/srv-user.service';
import { userdata } from 'src/app/userdata';
import { FormGroup, NgForm, AbstractControl,FormArray, FormControl, FormBuilder,Validators } from '@angular/forms'
import { BehaviorSubject, Observable } from 'rxjs';
import { TableData } from '../../table-data.model';
@Component({
  selector: 'app-userdatadatatable',
  templateUrl: './userdatadatatable.component.html',
  styleUrls: ['./userdatadatatable.component.css']
})
export class UserdatadatatableComponent implements OnInit {
  data: TableData[];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = ['id', 'name','email'];
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  formarrayfild: FormArray = this.formBuilder.array([{}]);
  form: FormGroup = this.formBuilder.group({userdata:this.formarrayfild});


  addRow() {
    const formar = this.formBuilder.group({satt:['',Validators.required],ttt:['',Validators.required],tttt:['',Validators.required]}); 
    this.formarrayfild.push(formar);
    this.updateView()
  }
  // displayColumns = ['from', 'to'];
  // rows: FormArray = this.fb.array([]);
  // form: FormGroup = this.fb.group({ 'users': this.rows });



  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
    this.updateView();
  }

  updateView() {
    this.dataSource.next(this.formarrayfild.controls);
  }
  removeQuantity(i:number) {
    this.formarrayfild.removeAt(i);
  }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post) {
    this.post = post;
    alert("Form submited successfully")
    this.formGroup.reset()
    // this.formGroup.setErrors
  }
//   addRow(d?: TableData, noUpdate?: boolean) {
//     const row = this.fb.group({
//       'id'   : [d && d.id ? d.id : null, []],
//       'name'     : [d && d.name   ? d.name   : null, []],
//       'email'     : [d && d.email   ? d.email   : null, []]
//     });
//     this.rows.push(row);
//     if (!noUpdate) { this.updateView(); }
//   }

//   updateView() {
//     this.dataSource.next(this.rows.controls);
//   }
}


//   form: FormGroup;
//   users: FormArray;
//   userlist: object;
  
//   ELEMENT_DATA: userdata[];
//   displayedColumns = ['id', 'name', 'email'];
//   // dataSource = new MatTableDataSource(this.ELEMENT_DATA);

//   constructor(private srv: SrvUserService,
//     private formBuilder: FormBuilder,) { }
//   // public userdis() {
//   //   this.srv.servdata().subscribe(report => {
//   //     this.dataSource.data = report as userdata[];
//   //     console.log(JSON.stringify(this.dataSource.data[0].id))

//   //   })
//   // }
//    dataSource = [
//     {id: 1, name: 'Vani', email: "vani@gmail.com"},
//     {id: 2, name: 'Vasu', email: "vasu@gmail.com"},
//     {id: 3, name: 'Likhitha', email: "likki@gmail.com"},
    
//   ];
  
//   ngOnInit() {
//     this.form= this.formBuilder.group({
//       users: this.formBuilder.array([])
//   })
//   this.setUsersForm();
//   this.form.get('users').valueChanges.subscribe(users => {console.log('users', users)});
// }
// private setUsersForm(){
//   const userCtrl = this.form.get('users') as FormArray;
//   this.dataSource.forEach((user)=>{
//     userCtrl.push(this.setUsersFormArray(user))
//   })
// };

// add(){
//   // const userCtrl = this.form.get('users') as FormArray;
// }
// private setUsersFormArray(user){
//  return this.formBuilder.group({
//       id:[user.id],
//       name:[user.name],
//       email:[user.email], 
//   });
// }
    // this.userdis()
  //   this.form= this.formBuilder.group({
  //     users: this.formBuilder.array([])
  // })
    // this.form = this.formBuilder.group({
    //   id: [this.dataSource.data[0].id],
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //  })
  // }

  // setUsersForm(): FormGroup {
  //   return this.formBuilder.group({
  //     id: '',
  //     name: '',
  //     email: '',
    
  //   });
  // }
  // addFieldValue() {
  //   this.users = this.form.get('users') as FormArray;
  //   this.users.push(this.setUsersForm());
  // }


  // get serviceFeeValues(): FormArray {
  //   return this.tableForm.get('users') as FormArray;
  // }


  export interface Element {
    name: string;
    email: string;
    phoneno: number
  }
  const ELEMENT_DATA: Element[] = [
    { name: 'Lithium', email:'Lithi',phoneno:33333},
    { name: 'Beryllium', email:'bey',phoneno:3332 },
    { name: 'Boron',email:'elel',phoneno:456789  }
  ];
  