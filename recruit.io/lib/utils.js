import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { interviewCovers,mappings } from "@/constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


function getRandomInt(n){
  return Math.floor(Math.random()*(n));
}

export const getRandomInterviewCover=()=>{
  return `/covers${interviewCovers[getRandomInt(interviewCovers.length)]}`
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function normalizeTech(tech){
    const key = tech.toLowerCase().replace(/\.js$/,"").replace(/\s+/g,"");
    return mappings[key] || key;
}


const checkIconExists = async (url)=>{
  try{
    const response = await fetch(url,{method:"HEAD"});
    return response.ok;
  }
  catch(error){
    return false;
  }
}


export const getTechLogos = async ({techstack})=>{
  const logoURLs = techstack.map((tech)=>{
    const normalizedTech = normalizeTech(tech);
    return {
        tech,
        url:`${techIconBaseURL}/${normalizedTech}/${normalizedTech}-original.svg`,
    }
  })

  const result = await Promise.all(
    logoURLs.map(async ({tech,url}) =>{
        const isValid = await checkIconExists(url);
        return {
          tech,
          url: isValid ? url : '/tech.svg',
        }
    })
  )

  return result
}