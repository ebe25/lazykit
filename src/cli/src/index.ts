#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import init from "./scripts/init.js";
import teardown from "./scripts/teardown.js";

/**
 * Main CLI program
 * @version 0.0.1
 * @description CLI program for managing the project
 */
const program = new Command();
program
  .name("@jrtilak/lazykit")
  .description(
    "CLI program for adding utility methods to your the project fro lazykit like a pro"
  );

/**
 * Handle when the program is run without any arguments
 * If there are no arguments, show a link to docs and github repo
 * Also show the version of the program
 * Also show run --help to get help
 */

if (process.argv.length === 2) {
  console.log("\n");
  console.log(chalk.green("Welcome to Lazykit CLI"));
  console.log("For help, run: --help");
  console.log("For documentation, visit: https://lazykit.thapatilak.com.np");
  console.log("For github repo: https//:github.com/jrtilak/lazykit\n");
  process.exit(0);
}

/**
 * Command to initialize the project
 */
program
  .command("init")
  .description("Initialize the project")
  .alias("i")
  .option("-js, --javascript", "Initialize the project with javascript")
  .option("-ts, --typescript", "Initialize the project with typescript")
  .option("-p, --path <path>", "Initialize the project in the given path")
  .option(
    "-f, --force",
    "Force initialize the project, even if the project is already initialized"
  )
  .option(
    "-s, --separate",
    "Initialize the project configuration in separate file called lazykit.config.js else in package.json"
  )
  .action(init);

/**
 * Command to teardown the project
 */
program
  .command("teardown")
  .description("Remove the lazykit configuration from the project")
  .alias("td")
  .action(teardown);

program.parse(process.argv);
