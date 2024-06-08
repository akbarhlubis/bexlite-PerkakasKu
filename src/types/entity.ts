export interface ITool {
    id: number;
    name: string;
    description: string;
    url: string;
    image: string;
    visits: number;
    verified: boolean;
    is_public: boolean;
}