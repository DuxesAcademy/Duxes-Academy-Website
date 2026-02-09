import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CoursesPage from '@/pages/CoursesPage';
import FacultyPage from '@/pages/FacultyPage';
import ProjectsPage from '@/pages/ProjectsPage';
import BlogPage from '@/pages/BlogPage';
import FaqsPage from '@/pages/FaqsPage';
import ContactPage from '@/pages/ContactPage';
import GalleryPage from '@/pages/GalleryPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import LoginPage from '@/pages/LoginPage';
import AdminPage from '@/pages/AdminPage';
import RegisterPage from '@/pages/RegisterPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import { Toaster } from '@/components/ui/toaster';

import FresherPage from '@/pages/FresherPage';
import ProfessionalPage from '@/pages/ProfessionalPage';
import PlacementPage from '@/pages/PlacementPage';
import DashboardPage from '@/pages/DashboardPage';

import FrostPage from '@/pages/FrostPage';
import AutomatedStoragePage from '@/pages/AutomatedStoragePage';
import BioMedicalPage from '@/pages/BioMedicalPage';
import VirtualLabPage from '@/pages/VirtualLabPage';
import SmartBreadboardPage from '@/pages/SmartBreadboardPage';
import RobolPage from '@/pages/RobolPage';
import IndustrialWater from '@/pages/IndustrialWaterPage';
import ContactlessWaterPage from '@/pages/ContactlessWaterPage';
import ProstirPage from '@/pages/ProstirPage';

import EmbeddedSyatemPage from '@/pages/EmbeddedSystemPage';
import IoTPage from '@/pages/IoTPage';
import LinuxRTOSPage from '@/pages/LinuxRTOSPage';
import AutomotivePage from '@/pages/AutomotivePage';
import LowWirelessPage from '@/pages/LowWirelessPage';
import EmbeddedMLPage from '@/pages/EmbeddedMLPage';
import EmbeddedProductPage from '@/pages/EmbeddedProductPage';
import EmbeddedInternship from '@/pages/EmbeddedInternship';
import EmbeddedAerospacePage from '@/pages/EmbeddedAerospacePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          <Route path="/freshers" element={<FresherPage />} />
          <Route path="/professionals" element={<ProfessionalPage />} />
          <Route path="/placements" element={<PlacementPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/frost" element={<FrostPage />} />
          <Route path="/autostore" element={<AutomatedStoragePage />} />
          <Route path="/biomedical" element={<BioMedicalPage />} />
          <Route path="/virtuallab" element={<VirtualLabPage />} />
          <Route path="/smartbreadboard" element={<SmartBreadboardPage />} />
          <Route path="/robokid" element={<RobolPage />} />
          <Route path="/industrialmonitor" element={<IndustrialWater />} />
          <Route path="/contactless" element={<ContactlessWaterPage />} />
          <Route path="/prostir" element={<ProstirPage />} />
         

          <Route path="/embeddedsystem" element={<EmbeddedSyatemPage />} />
          <Route path="/iot" element={<IoTPage />} />
          <Route path="/linuxrtos" element={<LinuxRTOSPage />} />
          <Route path="/automotive" element={<AutomotivePage />} />
          <Route path="/lpdws" element={<LowWirelessPage />} />
          <Route path="/emledgeai" element={<EmbeddedMLPage />} />
          <Route path="/embeddedproduct" element={<EmbeddedProductPage />} />
          <Route path="/embeddedinternship" element={<EmbeddedInternship />} />
           <Route path="/embeddedaerospace" element={<EmbeddedAerospacePage />} /> 
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;
  