import { LightningElement, track } from 'lwc';

export default class CustomTable extends LightningElement {
    tableHeaders = ['last Name', 'First Name', 'DoB', 'SSN', 'Patient Enrolled',
        'Patient Counseling', 'Anz Frequency', 'Test Date', 'ANZ Count', 'ANC Count Verified']
    @track tableBodyData = [
        {
            id: 1,
            lastName: 'karkra',
            fName: 'nikhil',
            dob: '10/20/1994',
            ssn: '',
            anzFrequency: 'Weekly',
            testDate: '02/20/2020',
            anzCount: '25ul',
            patientEnrolled: "true",
            patientEnrolledName: 'patientEnrolled',
            patientEnrolledOptionValues: [
                { label: 'Yes', value: "true" },
                { label: 'No', value: "false" }
            ],
            patientCounseling: "true",
            patientCounselingName: 'patientCounseling',
            patientCounselingOptionValues: [
                { label: 'Verified', value: "true" },
                { label: 'Not Verified', value: "false" }
            ],
            anzCountVerified: "true",
            anzCountVerifiedName: 'anzCountVerified',
            anzCountOptionValues: [
                { label: 'Verified', value: "true" },
                { label: 'Not Verified', value: "false" }
            ],
        },
        {
            id: 2,
            lastName: 'Hello',
            fName: 'World',
            dob: '10/20/1994',
            ssn: '',
            anzFrequency: 'Weekly',
            testDate: '02/20/2020',
            anzCount: '25ul',
            patientEnrolled: "true",
            patientEnrolledName: 'patientEnrolled1',
            patientEnrolledOptionValues: [
                { label: 'Yes', value: "true" },
                { label: 'No', value: "false" }
            ],
            patientCounseling: "true",
            patientCounselingName: 'patientCounseling1',
            patientCounselingOptionValues: [
                { label: 'Verified', value: "true" },
                { label: 'Not Verified', value: "false" }
            ],
            anzCountVerified: "true",
            anzCountVerifiedName: 'anzCountVerified1',
            anzCountOptionValues: [
                { label: 'Verified', value: "true" },
                { label: 'Not Verified', value: "false" }
            ]

        }

    ]

    get uniqueKey() {
        return Math.random();
    }
    handleChange(event) {
        console.log(event.detail.value)
        console.log(event.target.value)
            let {id, columntype} = event.target.dataset
            let value = event.detail.value

        let data = this.tableBodyData.map(item=>{
                    return item.id ==id ? 
                    (columntype ==='patientEnrolled'? {...item, "patientEnrolled":value}:
                    columntype ==='patientCounseling'? {...item, "patientCounseling":value}:
                    columntype ==='anzCountVerified'? {...item, "anzCountVerified":value} :{...item}
                    )
                    :{...item}
                })
         this.tableBodyData =[...data]
    }
}