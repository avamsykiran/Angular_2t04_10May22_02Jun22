Angular
-------------------------------------------------------------------

    Pre-Requisite Skills
    ----------------------
        HTML 5
            Html elements and attributes
            Form Elements and Validations
            Tables and Lists
            HTML 5 Media elements
            HTML 5 API - GeoLocation, Drag-n-Drop, Web Storage

        CSS 3
            Selectors
            CSS Operators
            Box Model
            CSS properties related to images, lists,tables and responsive design

        JavaScript (ES6)
            Standard classes String ,Math, Date
            Standard Objects and properties like window, document, history ...
            Functions, call backs, closures, lambda / Arrow functions
            Arrays and array prototype functions
            async and await, Promise
            classes and objects

    Lab Setup
    ----------------------
        NodeJS           >=15.x   node --version
        Angular CLI      >=12.x   ng --version
        VSCode IDE      
        Chrome

    Installing Angular CLI
    ------------------------
        npm install -g @angular/cli

    Introduction
    ----------------------

        Angular     is a javascript framework used to develop SPA.

        Static Websites
                a reserved spoace on a http-server which is hosted to a public URL.
                in that space 'site', we have .html documents pre-written.

        Dynamic Web Application
                is a one or more programes executing onb a http-server, and these
                programs, after receiving a request, will generate HTML contnet dynamically (on the fly)
                and the generated html content is responded back to the client.

                Server                                              Client

                    Servlets/JSPs/      <---------------REQ----------
                    ASPs/PHP pages      --------HTML content as Resp--->
                    ...etc

        Single Page Application 

                Server                                                                  Client
                    app-bundle                  <----REQ-1-------------------------
                        index.html
                        style sheets            --the whole app-bundle will go as resp--->  index.html along with JS
                        a lot of                                                              is loaded
                        javascript code

           Oracle/MySQL <-->  rest-api    <--------JSON/XML------------------------>    the data is persisted or retrived
    
    Why NodeJS ?
    ---------------------------------
        nodejs is used for stand alone execution of javascript, and it is also true that
        the react application executes in a client (browser).

        but do develop a nodejs application....
            1. compose code                 we need an ide
            2. bundle the code              we need tools like webpack
            3. host the code on a server    we need a development server
            4. test our code                we need libraries like jasmine / jest
            ......

        now testing, packing ..etc must happen on the developer machine and the tools like
        jest / jasmine / webpack are javascript programs and these will e made to run on developer machine using
        nodejs

    Angular Evolution
    -----------------------------

        AngularJS           used to use Javascript for scripting

        Angular 2           we sue Typescript for scripting
        Angular 4
        Angular 5
        Angular 6
        Angular 7
        Angular 8
        Angular 9
        Angular 10
        Angular 11
        Angular 12

    Typescript
    --------------------------------

        Typescript is a microsoft product.

        Typescript = javascript + strongly typedness

        let varNamr:type;

        const constName:type = value;

        class ClassName {
            datamembers : type; //bydefault are private
            public datamember2:type;

            constructor(private argAsDatamember:type){
                this.datamember=value;
            }

        }

        interface MyInterface{
            public datamember:type

            public someFunction(param1:type):returnType;
        }

        class AClass implements MyInterface{
            public someFunction(param1:type):returnType {
                return value;
            }
        }

        type?
            number
            string
            boolean
            Date
            Object
            user defiend classes or interface
            any
            void
            undefined
            null

    Angular Archetecture
    -------------------------------------------------

        Each angular resource is a typescript class.
        Each angular resource is marked with a decorator, and the configuaration 
        of those resources is passed as a JSON object to the decorator and that JSON
        object is called meta-data.

        Modules         
                        is a logical unit that has components,directives,pipes,services and 
                        other modules inside it.

                        Each angular application must have one and only one 
                        top-level module called 'ROOT module'.

                        Anything related tot he app must be inside the root-module.

                        sub-modules living inside the root-module are called feature-modules.

                                    @NgModule({
                                        declarations:[],
                                        imports:[],
                                        exports:[],
                                        providers:[],
                                        bootstrap:[]
                                    })
                                    class AppModule{}

                        declarations        list of components,directives and pipes that belong to this module
                        
                        imports             list of feature-moduels to be imported intot he current module

                        exports             list of components,directives and pipes that belong to this module and
                                            that are to be accessed outisde this module.
                                            this property is not used in root-module.

                        providers           list of services that belong to this module
                        
                        bootstrap           list of componenets that must be instantiaed immediatly after a module is loaded.
                                            this property is used only for root-module.

        Components      
                        is a html-element defiend in angular.

                        Component = behavioural code + template

                        behavioural code is written in typescript
                        template is written in html

                            header.component.html

                                <header>
                                    <h3>{{brand}}</h3>
                                </header>

                            header.component.ts

                                @Component({
                                    selector:'app-header',
                                    templateUrl:'header.component.html',
                                    stylesUrl:[],
                                    providers:[]
                                })
                                class Header {
                                    brand:string;

                                    constructor(){
                                        this.brand="My First Angular App";
                                    }
                                }

                            <app-header></app-header>

        Directives  
                    is a html-attribute defiend in angular

                    in-built directives
                        event directives
                            click
                            dblclick
                            mouseleave
                            mouseover
                            keyup
                            keydown
                            blur
                            focus
                            ngSubmit

                        structural directives
                            *ngIf
                            *ngFor

                        others
                            ngModel            FormsModule
                            formControl        ReactiveFormsModuel
                            ...etc

                    custom directives
        
                        @Directive({
                            selector:'my-directive'
                        })
                        class MyDirective {
                            ......
                        }

        Pipes       
                is used to convert or transform a piece of data into another jsut before rendering it.

                in-built pipes
                    lowercase
                    uppercase
                    titlecase
                    number
                    currency
                    percentage
                    date
                    async
                    json

                custoem pipes
                    @Pipe({
                        name:'mypipe'
                    })
                    class MyPipe {
                        ..............
                    }

        Services
                    is used to hold bussiness logic like calicualtions/ rest api communication ...etc.,

                    @Injectable({
                        providedIn:'root'
                    })
                    class ServiceName {
                        .............
                    }

    Angular CLI
    -------------------------------------------------

        Command Line Interface

        ng new projName

        cd projName

        projName> ng g component name --skip-tests
        projName> ng g directive name --skip-tests
        projName> ng g module name
        projName> ng g pipe name --skip-tests
        projName> ng g service name --skip-tests
        projName> ng g class name --skip-tests
        projName> ng g interface name

        projName> ng build
        projName> ng test
        projName> ng serve --port 9898 -o

    Angular Data Binding
    -------------------------------------------------

        using the fields of the componenet class insode
        the component template is called data binding.


        1. Interpolation

            {{angular-expression}}

        2. Two - Way Data Binding

            is used to collect data from a form-eleemnt or to load data into a form element.

            field  -------> form-element 
                   <-------

            ngModel     FormsModule

            [(ngModel)] = "field"

        3. One - Way Data Binding

            a) attribute binding
                [html-attribute]="field"

            b) event binding
                is to link/invoke a method when an event happens.

                (event-directive)="method()"

            c) style binding

                [style.cssProperty]="field"
                
            d) css-class binding

                [class.className]="condition"
        
        
    Inter Component Communication
    ------------------------------------------------

        Parent components can share data with child 
        components through 'attributes'.

        Attributes are created using '@Input()' decorator
        in a component on the field that shall act as an 
        attribute.

        through 'event-bubbling' child component can raise an
        evetn and the parent componetn has to ahndle the event.

            in child component a field of type 'EventEmitter'
            must be created. That field shall be marked with
            @Output() decorator, and only then the parent component
            can handle that event.

    Angular Forms
    ------------------------------------------------

        Template Driven Forms

            1. are generated in template
            2. are mapped to the field using ngModel directive from FormsModule
            3. we need to map ngModel objects to template references in order to
                verify the validity of those form elements.
            4. are hard to test and are used in limited senarios especially when the form has
             not more then 2 or 3 controls.

        Model Driven Forms / Reactive forms       

            1. are generated in the component class.
            2. we use ReactiveFormsModule
            3. These form provided inbuilt validators and are mapped to the 
                template using  formControl directive from ReactiveFormsModule.

    RxJS
    -------------------------------------------------

        Reactive-Javascript is a library offering observability pattern.

        Observble class is an enchanced Promise class.

        A promise can supply a value only after the completion of the asynchronosu job,
        An observable can emit values continuosly while the job is in progress.

        A promise can be subscribed by only one subscriber,
        An observable cab be subsribed by more than one subscriber.

        let p = new Promise( (resolve,reject) => {
            //resolve is sued to signal the complete
            //reject is used to signal the error
        });
    
        p.then(
            value => {},
            err => {}
        );

        let ob = new Observable( observer => {
            //observer.next         to emit values
            //observer.error        to signal error
            //observer.complete     to signal completion
        });

        ob.subscribe(
            val => {},      //respond to next
            err => {},      //respond to error
            () => {}        //respond to complete
        );

    HttpClientModule
    --------------------------------------------------

        HttpClient
            get(url:string) : Observable
            put(url:string,reqBody:Object) : Observable
            post(url:string,reqBody:Object) : Observable
            delete(url:string) : Observable

    BudgetTracker - Assignment
    --------------------------------------------------------

        1. Add a transactionm       txnid,tnxDate,txnAmount,txnType
        2. modify a transaction
        3. delete a transaction
        4. display the statement
            TxnId   DateOfTransaction   Description     Credit      Debit
             1      01-Aug-2021         Salary          500000
             2      02-Aug-2021         Rent                         5000
            
            Totals                                      500000       5000
            Balance                                                450000

    Routing
    -------------------------------------------

        RouterModule

            Route       path:
                        component:
                        children: []
                        pathMatch: 'statrsWith|full'

            Routes      an array of Route

            RouterModule.forRoot(an array of Route)

            routerLink  as altenrnate to href attribue of 'a' tag

            routerLinkActive    takes the css class to be applied on an active link.

            Router      a service used to navigate programatically.

            router-outlet   is a component used to reserve place for incoming components.