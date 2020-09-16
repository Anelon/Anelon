import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Dwitter } from "../dwitter/mod.ts";

const twitterAPIKeys = config({ path: "./.twitter.env" });

const dwitter = new Dwitter(twitterAPIKeys);

const tweets = await dwitter.getRecentByUser("DevAnelon")

console.log(tweets[0].text);


