// O Next declara apenas "*.module.css", então imports de CSS global de pacotes
// (ex.: "aos/dist/aos.css") precisam desta declaração para o TypeScript.
declare module "*.css"
