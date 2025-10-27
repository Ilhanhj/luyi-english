
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
    // Tutors
    { id: 'tutor-1', description: "Photo of tutor Sarah", imageUrl: '/images/tutors/tutor1.jpg', imageHint: "woman portrait" },
    { id: 'tutor-2', description: "Photo of tutor John", imageUrl: '/images/tutors/tutor2.jpg', imageHint: "man portrait" },
    { id: 'tutor-3', description: "Photo of tutor Emily", imageUrl: '/images/tutors/tutor3.jpg', imageHint: "woman smiling" },
    { id: 'tutor-4', description: "Photo of tutor Michael", imageUrl: '/images/tutors/tutor4.jpg', imageHint: "man professional" },
    { id: 'tutor-5', description: "Photo of tutor Jessica", imageUrl: '/images/tutors/tutor5.jpg', imageHint: "woman professional" },
    { id: 'tutor-6', description: "Photo of tutor David", imageUrl: '/images/tutors/tutor6.jpg', imageHint: "man portrait" },

    // Testimonials
    { id: 'testimonial-adwiyah-full', description: 'Full screenshot of testimonial from Adwiyah', imageUrl: '/images/testimonials/testi-adwiyah.jpg', imageHint: 'chat screenshot' },
    { id: 'testimonial-april-full', description: 'Full screenshot of testimonial from April', imageUrl: '/images/testimonials/testi-april.jpg', imageHint: 'chat screenshot' },
    { id: 'testimonial-rani-full', description: 'Full screenshot of testimonial from Rani', imageUrl: '/images/testimonials/testi-rani.jpg', imageHint: 'chat screenshot' },

    // Logos (example if they were remote)
    { id: 'logo-google', description: 'Google logo', imageUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'company logo' },
    { id: 'logo-gojek', description: 'Gojek logo', imageUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'company logo' },
    { id: 'logo-tokopedia', description: 'Tokopedia logo', imageUrl: 'https://images.unsplash.com/photo-1562783912-21ad31ee2a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'company logo' },
    { id: 'logo-traveloka', description: 'Traveloka logo', imageUrl: 'https://images.unsplash.com/photo-1622465911368-72162f8da3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlibrb-4.1.0&q=80&w=1080', imageHint: 'company logo' },
    { id: 'logo-microsoft', description: 'Microsoft logo', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'company logo' },
];
