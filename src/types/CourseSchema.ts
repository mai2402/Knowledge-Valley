export interface CourseSchema {
        id: number;
        name: string;
        description: string;
        category: string;
        price: number;
        discount: number;
        duration: number; 
        level: string;
        rating?: number; 
        instructor?: string;
        enrollmentCount?: number; 
        thumbnailUrl?: string; 
      }
      
  
  