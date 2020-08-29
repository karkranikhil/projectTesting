2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
import {
    LightningElement,
    wire,
    track
} from 'lwc';
import getUserDetails from '@salesforce/apex/UserInfoDetails.getUserDetails';
import Id from '@salesforce/user/Id';
 
 
export default class Userinfoexample extends LightningElement {
    userId = Id;
    @track user;
    @track error;
    @wire(getUserDetails, {
        recId: Id
    })
    wiredUser({error,data}) {
        if (data) {
            this.user = data;
        } else if (error) {
            this.error = error;
        }
    }
}