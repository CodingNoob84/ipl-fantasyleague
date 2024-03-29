import axios from "axios";

const baseurl = process.env.NEXT_PUBLIC_BASEURL;

export async function getAllPlayers() {
  try {
    const response = await axios.get(`${baseurl}api/player/getall`);
    //console.log(response);
    return response.data.data;
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

export async function createEditPlayer(data) {
  console.log(baseurl);
  try {
    const response = await axios.post(
      `${baseurl}api/player/insertplayer`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getTeamDetails(teamname) {
  //console.log(baseurl);
  try {
    const response = await axios.get(
      `${baseurl}api/team/getateam?teamname=${teamname}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getMatchbyId(data) {
  try {
    const response = await axios.post(
      `${baseurl}api/matches/getmatchbyid`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function createEditMatch(data) {
  console.log(baseurl);
  try {
    const response = await axios.post(
      `${baseurl}api/matches/insertupdate`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getAllMatches() {
  try {
    const response = await axios.get(`${baseurl}api/matches/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getUpcomingMatches() {
  try {
    const response = await axios.get(`${baseurl}api/matches/upcoming`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getNextMatch() {
  try {
    const response = await axios.get(`${baseurl}api/matches/next`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function insertUpdatePredictions(data) {
  try {
    const response = await axios.post(
      `${baseurl}api/prediction/insertupdate`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getScorecardByMatchId(data) {
  try {
    const response = await axios.post(
      `${baseurl}api/matches/getscorecardbyid`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getTeamScorecardById(data) {
  try {
    const response = await axios.post(
      `${baseurl}api/matches/getteamscorebyid`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function updatePlayingFifteen(data) {
  try {
    const response = await axios.post(
      `${baseurl}api/matches/updateplayingfifteen`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getAllPredictions(data) {
  try {
    const response = await axios.post(`${baseurl}api/prediction/getall`, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}
