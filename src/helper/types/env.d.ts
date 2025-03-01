export { };

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "dev" | "uat" | "prod",
            BASEURL: string,
            HEAD: true | false
        }
    }
}