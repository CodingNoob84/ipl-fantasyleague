import axios from "axios";

const baseurl = process.env.NEXTAUTH_URL;
const api = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});

export async function getAllPlayers() {
  try {
    const response = await axios.get(`${baseurl}api/player/getall`);
    //console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getAllTeams() {
  try {
    const response = await axios.get(`${baseurl}api/team/getallteams`);
    //console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}
