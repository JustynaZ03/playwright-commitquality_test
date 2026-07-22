# Test Plan - Playwright QA Automation Project
## Project Overview
This document describes the test plan for an automated end-to-end testing project created with Playwright.
The goal of this project is to testing site (https://commitquality.com/) and develop programming skills.
## Test Objectives
The main objectives of testing are to:
- Verify that core application features work as expected
- Detect defects in key user flows
- Confirm that changes do not break existing functionality
- Generate readable test reports for analysis
## Scope of Testing
The test scope includes the following areas:
- User form
- Form validation
- Navigation between pages
- Product search
- Checkout flow
- Error messages
- File upload and download
- General components like: buttons, radiobutton, dropdowns, checkboxes and links
- Popouts
- CRUD
## Test Approach
Testing will be performed using automated end-to-end tests written in Playwright.

The tests will simulate real user actions in the browser, such as clicking buttons, filling forms, navigating pages, and verifying displayed content.

## Test types
- Smoke tests: Basic checks to confirm that the application is available and key flows work
- UI Tests: Tests validating user interface behavior and visible elements
- Functional tests: Tests checking whether features work according to requirements
- Negative tests: Tests verifying invalid inputs, errors, and validation messages

## Test Environment
- Test framework:   Playwright
- Programming language: TypeScript
- Runtime:	Node.js
- Browsers:	Chromium, Firefox, WebKit
- CI/CD:	GitHub Actions
- Report format:	Playwright HTML Report
- Operating system:     Local machine and GitHub Actions runner
## Tools
The following tools are used in the project:
- Playwright
- TypeScript
- Node.js
- npm
- Git
- GitHub
- GitHub Actions
- Playwright HTML Reporter
## Test Data
- Valid user credentials
- Invalid user credentials
- Product names
- Form input values
## Entry Criteria

Testing can start when:

- The application is available for testing
- Test environment is configured
- Required dependencies are installed
- Test data is prepared
- Basic requirements or user flows are known
- Playwright configuration is completed

## Exit Criteria

Testing can be considered completed when:

- All planned test cases have been executed
- Critical and high-priority test scenarios have passed
- Failed tests have been analyzed
- Defects have been reported
- Test report has been generated
- No blocking issues remain unresolved

## Test Execution

ests can be executed locally using:

`npx playwright test`

Tests can be executed in headed mode using:

`npx playwright test --headed`

Tests can be executed in UI mode using:

`npx playwright test --ui`

The HTML report can be opened using:

`npx playwright show-report`

## CI/CD Execution

Automated tests should be executed in GitHub Actions on:

- Push to the main branch
- Pull request to the main branch

The CI/CD pipeline should:

- Check out the repository
- Install Node.js
- Install project dependencies
- Install Playwright browsers
- Run Playwright tests
- Upload the HTML report as an artifact

## Assumptions
The test plan is based on the following assumptions:

- The tested application is available in a stable test environment
- Main user flows are known
- Test data can be created or reused
- The project is focused on automated end-to-end testing
- Playwright is the main automation tool

## Example Test Scenarios
- Verify if delete products functionality work
- Verify if download file functionality work
- Verify if validation for login form work
- Verify if general component work correctly

## Reporting 
Test results will be reported using the Playwright HTML Report.

The report should include:

- Passed tests
- Failed tests
- Skipped tests
- Error details
- Screenshots for failures
- Videos or traces if enabled
- Execution time
## Conclusion
This test defines the testing approach for a Playwright-based QA automation project. The project covers basic user scenarios such as login, form validation, navigation, and other key application flows. It also includes project documentation, test planning, and the possibility of running tests automatically with GitHub Actions.
As a beginner project, it focuses on building a strong foundation in test automation, using good project structure, readable test cases, and clear reporting. The project can be further improved by adding more test scenarios, using the Page Object Model pattern, extending test data, and improving CI/CD integration.