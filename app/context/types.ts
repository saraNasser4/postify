export interface post {
    _createdAt: string,
    views: number,
    author: { name: string, _id: number },
    _id: number,
    description: string,
    image: string,
    category: string,
    title: string,
}