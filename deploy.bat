@ECHO OFF

IF [%1] == [-h] GOTO Help
IF [%1] == [--help] GOTO Help

ssh-agent

:Git
IF [%1] == [] GOTO Remote
echo Creating git commit ...
git add -A
git commit -m %1
git push

:Remote
echo Deploying on remote ...
ssh -t node@neuromancer ~/kayt-dev-svelte/deploy.sh

:Exit
echo Deploy finished
echo Exiting ...
exit

:Help
echo:
echo -=-=-=- Remote deploy script help -=-=-=-
echo:
echo deploy.bat                                             // Only runs remote deploy script over ssh
echo deploy.bat ^[-h ^| --help^]                               // Prints this help
echo deploy.bat ^['commit message'^]                          // Pushes a commit with all unstaged changes and the specified commit message
echo deploy.bat ^['commit message'^] ^[major ^| minor ^| patch^]  // Bumps project version by specified ID and "^"
echo:
echo -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
echo: