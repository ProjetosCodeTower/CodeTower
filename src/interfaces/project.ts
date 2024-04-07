import { tipoDeProjeto } from "./tipo-de-projeto";

export interface ProjectData {
    projects: Project[];
}

export interface Project {
    createdAt: string;
    data: string;
    descricao: string;
    id: string;
    nomeDoProjeto: string;
    publishedAt: string;
    slug: string;
    updatedAt: string;
    tipoDeProjeto: tipoDeProjeto;
    imagem: {
        url: string
    };
}