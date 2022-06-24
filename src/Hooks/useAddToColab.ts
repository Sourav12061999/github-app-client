import React, { useState } from "react";
import { TableRow } from "../Components/Table/table.types";
import axios from "axios";
function useAddToColab() {
  const [failed, setFailed] = useState([]);
  function AddToColab(data: Array<TableRow>) {
    const authToken = `Bearer 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`; // Settings -> Developer settings -> Personal access token. Give repo and user scopes.
    const org = "masai-course";
    const templateRepo = "code-submission";
    let userNames = data.map((repo) => repo.github_username);
    let repoNames = data.map(
      (repo) => repo.name.toLocaleLowerCase() + "_" + repo.student_code
    );
    var failedCollaboratorsArray: Array<string> = [];
    var urlsArray: Array<string> = [];
    const createRepositories = async () => {
      const status = await Promise.allSettled(
        repoNames.map((name) =>
          createUsingTemplate(name, failedCollaboratorsArray)
        )
      );
    };
    const createUsingTemplate = async (
      repositoryName: string,
      failedRepo: Array<string>
    ) => {
      try {
        const response = await axios({
          method: "post",
          url: `https://api.github.com/repos/${org}/${templateRepo}/generate`, // owner -> org
          headers: {
            Authorization: authToken,
            Accept: "application/vnd.github.baptiste-preview+json",
          },
          data: {
            name: `${repositoryName}`,
            owner: `${org}`, // owner -> org
            private: true,
          },
        });
        return response;
      } catch (error) {
        failedRepo.push(repositoryName);
        return error;
      }
    };
  
    const addCollaborator = async (repo: string, username: string) => {
      try {
        const response = await axios({
          method: "put",
          url: `https://api.github.com/repos/${org}/${repo}/collaborators/${username}`, // owner -> org
          headers: {
            Authorization: authToken,
            Accept: "application/vnd.github.baptiste-preview+json",
          },
          data: {
            permission: "maintain",
          },
        });
        return response;
      } catch (error) {
        return error;
      }
    };
  
    const addCollaboratorsToRepositories = async () => {
      const status: any = await Promise.allSettled(
        userNames.map((name, i) => addCollaborator(repoNames[i], name))
      );
  
      for (let i = 0; i < status.length; i++) {
        urlsArray.push(status[i].value.config.url);
        if (status[i].value.isAxiosError) {
          //   console.log("status--------", status[i]);
          failedCollaboratorsArray.push(
            status[i].value.config.url.split("/").pop()
          );
        }
      }
    };
  
    async function automate(
      failedCollaboratorsArray: Array<string>,
      urlsArray: Array<string>
    ) {
      try {
        await createRepositories();
  
        await addCollaboratorsToRepositories();
        console.log("failedCollaboratorsArray");
        console.dir(failedCollaboratorsArray, { maxArrayLength: null });
  
        console.log("urlsArray");
        console.dir(urlsArray, { maxArrayLength: null });
      } catch (error) {
        console.log(error);
      }
    }
    automate(failedCollaboratorsArray, urlsArray);
  }
  return AddToColab;
}

export default useAddToColab;
