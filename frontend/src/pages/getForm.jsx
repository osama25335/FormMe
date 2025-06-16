import { useEffect, useState } from 'react';
import FormulePage_1 from '../formulesPage/formule_1/formulePage_1.jsx';
import FormulePage_2 from '../formulesPage/formule_2/formulePage_2.jsx';
import WorkshopEvaluationForm from "../formulesPage/formule_3/formPage_3.jsx"
import WorkerRegistrationForm from '../formulesPage/formule_4/formPage_4.jsx';
import RoomReservationForm from '../formulesPage/formule_5/formPage_5.jsx';
import { authUsersStore } from '../stores/authUsersStore.js';

const GetForm = () => {
  const [Form, setForm] = useState(null);
  const {logout, authUser} = authUsersStore();
  const stringPageKey = String(authUser.pageKey);
  const pages = [
    {   "pageKey":"page1",
        "form":FormulePage_1
    },
    {   "pageKey":"page2",
        "form":FormulePage_2
    },
    {   "pageKey":"page3",
        "form":WorkshopEvaluationForm
    },
    {   "pageKey":"page4",
        "form":WorkerRegistrationForm
    },
    {   "pageKey":"page5",
        "form":RoomReservationForm
    },
]
useEffect(()=>{
const page = pages.find(page => page.pageKey == stringPageKey);
setForm(()=>page.form);
},[pages])
if(!authUser.pageKey) {
     return (<p>they not exist the page</p>);
   }
// setViewer(()=>page.viewer);

return (
    <>
    <div>
        <header className=' bg-background-color shadow-none lg:shadow-md lg:shadow-primary-color'>
            <div className="container mx-auto py-4 px-7  text-right">
                <button onClick={()=>logout()} className=" text-white capitalize bg-primary-color hover:bg-primary-color-hover px-4 py-3 font-medium max-md:px-2 max-md:py-1.5 max-md:font-normal duration-200" >logout</button>
            </div>
        </header>
        {Form &&  <Form/> }
    </div>

    </>
    );
};

export default GetForm;