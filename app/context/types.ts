export interface post {
    slug: { current: string },
    image: string,
    category: string,
    views: number,
    author: {  
        _id: number, 
        image: string, 
        bio: string, 
        name: string 
    },
    _createdAt: string,
    description: string,
    _id: number,
    title: string,
}