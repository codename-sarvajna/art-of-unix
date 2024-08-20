import { Probot } from "probot";

export default (app: Probot) => {
  app.onAny(async (context) => {
    console.log("context", context);
    // app.log.info({ event: context.name, action: context.payload.action });
  });
  // app.on("pull_request.reopened", async (context) => {

  //   const repoName: string = context.payload.repository.name;
  //   const repoOwner: string = context.payload.repository.owner.login;
  //   const pullNumber: number = context.payload.number;
  //   console.log("Pull Request Opened", repoName, repoOwner, pullNumber);
  //   const listFiles = await context.octokit.pulls.listFiles({
  //      repo: repoName,
  //      owner: repoOwner,
  //      pull_number: pullNumber
  //    });
  //   listFiles.data.forEach( file => {
  //     console.log(file);
  //     // const regex = new RegExp("YOUR TAG HERE", "g")
  //     // const result =   file.patch.match(regex)
  //     // if(result){
  //       // context.octokit.issues.createComment({
  //       //   repo: repoName,
  //       //   owner: repoOwner,
  //       //   issue_number: pullNumber,
  //       //   body: " :x: :x: :x: Deprecated :x: :x: :x:",
  //     // })
  //   })
  //   // const issueComment = context.issue({
  //   //   body: "Thanks for opening this issue!",
  //   //   issue_number: context.payload.number,
  //   // });
  //   // await context.octokit.issues.createComment(issueComment);
  // });

  app.on("pull_request_review_comment.created", async (context) => {
    // const repoName: string = context.payload.repository.name;
    // const repoOwner: string = context.payload.repository.owner.login;
    console.log("context", context);
    // const pullNumber: number = context.payload.pull_request.number;
    // console.log("Pull Request Comment Created", repoName, repoOwner, pullNumber);
    const issueComment = context.issue({
      body: "Thanks for this comment!",
      // issue_number: context.payload.number,
    });
    await context.octokit.issues.createComment(issueComment);
    // const listFiles = await context.octokit.pulls.listFiles({
    //    repo: repoName,
    //    owner: repoOwner,
    //    pull_number: pullNumber
    //  });
    // listFiles.data.forEach( file => {
    //   console.log(file);
    //   // const regex = new RegExp("YOUR TAG HERE", "g")
    //   // const result =   file.patch.match(regex)
    //   // if(result){
    //     // context.octokit.issues.createComment({
    //     //   repo: repoName,
    //     //   owner: repoOwner,
    //     //   issue_number: pullNumber,
    //     //   body: " :x: :x: :x: Deprecated :x: :x: :x:",
    //   // })
    // })
  });


  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
