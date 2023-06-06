import { Team } from "~/types/match";
import { Match } from "~/types/match";

export const useMatch = defineStore("match", () => {
  const value = ref<Match>({
    team: [],
  });

  function addTeam(team?: Team) {
    let newTeam = team || createTeam();
    value.value.team.push(newTeam);
  }

  function createTeam() {
    const team: Team = {
      member: [],
    };

    for (let i = 0; i < 5; i++) {
      team.member.push({
        name: "",
      });
    }

    return team;
  }

  return { value, addTeam, createTeam };
});
