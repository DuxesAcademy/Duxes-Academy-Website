
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Maximize } from 'lucide-react'; // Icon for lightbox trigger

// Placeholder data
const galleryImages = [
  { id: 1, src: '', alt: 'Workshop participants collaborating', description: 'Students working together during a web development workshop.', category: 'Workshops' },
  { id: 2, src: '', alt: 'Speaker presenting at an event', description: 'Guest speaker sharing insights at our annual tech conference.', category: 'Events' },
  { id: 3, src: '', alt: 'Students coding on laptops', description: 'Focused learning environment during a coding bootcamp session.', category: 'Bootcamps' },
  { id: 4, src: '', alt: 'Networking session at conference', description: 'Attendees networking during a break at the EduPlatform Summit.', category: 'Events' },
  { id: 5, src: '', alt: 'Hands-on design workshop', description: 'Participants sketching ideas in a UI/UX design workshop.', category: 'Workshops' },
  { id: 6, src: '', alt: 'Graduation ceremony group photo', description: 'Celebrating the achievements of our recent bootcamp graduates.', category: 'Events' },
  { id: 7, src: '', alt: 'Data science workshop screen', description: 'Close-up of code and visualizations during a data science session.', category: 'Workshops' },
  { id: 8, src: '', alt: 'Panel discussion on stage', description: 'Industry experts discussing future trends during a panel.', category: 'Events' },
];

// TODO: Implement Lightbox functionality (requires state management and potentially a library or custom component)

const GalleryPage = () => {
  // Placeholder state and function for lightbox
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openLightbox = (image) => {
    // setSelectedImage(image);
    // setLightboxOpen(true);
    alert('Lightbox functionality not yet implemented.'); // Placeholder action
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };


  return (
    <div className="space-y-16 md:space-y-24 fade-in">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-lime-100 to-emerald-100 dark:from-lime-900/30 dark:to-emerald-900/30 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Moments from our workshops, events, and community gatherings.</p>
      </motion.section>

      {/* Gallery Grid */}
      <section className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => openLightbox(image)}
            >
              <img 
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt={image.alt}
               src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                 <p className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{image.description}</p>
                 <Maximize className="absolute top-3 right-3 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
              </div>
               {/* Fallback visible description if needed */}
               {/* <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white text-xs group-hover:opacity-0 transition-opacity">
                 {image.category}
               </div> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Placeholder/Component */}
      {/* {lightboxOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
             <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[80vh] rounded-lg" />
             <p className="text-white text-center mt-4">{selectedImage.description}</p>
             <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20" onClick={closeLightbox}> <X /> </Button>
          </motion.div>
        </div>
      )} */}
    </div>
  );
};

export default GalleryPage;
  