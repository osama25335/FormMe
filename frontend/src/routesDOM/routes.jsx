import {Route, Routes} from "react-router-dom";
import AboutUsPage from "../pages/aboutUsPage";
import { ContactUsPage } from "../pages/contactUsPage";
import { DescoverStepsPage } from "../pages/discoverPage";
import { SecurityPage } from "../pages/securityPage";
import TermsAndConditions from "../pages/terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FAQs from "../pages/FAQsPage";
import GreenCardApplicationForm from "../formulesPage/formule_2/formulePage_2";
import WorkshopEvaluationForm from "../formulesPage/formule_3/formPage_3";
import WorkerRegistrationForm from "../formulesPage/formule_4/formPage_4";


const AppRoutes = () => (
        <Routes>
            <Route path='aboutus' element={<AboutUsPage/>} />
            <Route path='contactus' element={<ContactUsPage/>} />
            <Route path='discoversteps' element={<DescoverStepsPage/>} />
            <Route path='security' element={<SecurityPage/>} />
            <Route path='termsandconditions' element={<TermsAndConditions/>} />
            <Route path='privacypolicy' element={<PrivacyPolicy/>} />
            <Route path='faqs' element={<FAQs/>} />
            <Route path='greencardapplication' element={<GreenCardApplicationForm/>} />
            <Route path='workshopevaluation' element={<WorkshopEvaluationForm/>} />
            <Route path='workerregistration' element={<WorkerRegistrationForm/>} />

            <Route path='*' element={<p>there is nothing here: 404!</p>} />

        </Routes>

);

export default AppRoutes;