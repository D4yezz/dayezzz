type DemoAccount = {
  name: string;
  email: string;
  pass: string;
};
export interface IProject {
  id: number;
  images: string[];
  name: string;
  description: string;
  longDesc: string;
  features: string[];
  tags: string[];
  role: string;
  year: string;
  link: string;
  repo: string;
  accDemo?: DemoAccount[];
}
