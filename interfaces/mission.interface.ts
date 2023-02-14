export interface IMissionInterface {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: ILink;
    rocket: IRocket;
}


interface ILink {
    article_link: null | string;
    video_link: string;
}

interface ICore {
    reuse_count: number;
    status: string | boolean;
}

interface ICores {
    flight: number;
    core: ICore;
}

interface IFirstStage {
    cores: ICores[];
}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}

interface ISecondStage {
    payloads: IPayloads[];
}

interface IRocket {
    rocket_name: string;
    first_stage: IFirstStage;
    second_stage: ISecondStage;
}