---
layout: post

# Post info
title: 'Keeping DOTA 2 MMR updated on Dotabuff'
author: avi
date: 2020-01-09 06:00:00 +08:00
last_modified_at: 2020-07-16 02:33:00 +08:00
categories:
- Gaming
tags:
- DOTA 2

# Extras
image: assets/images/opendota.jpg
photocredit: OpenDota
rating: 4.5
---
Since Valve reworked its matchmaking and introduced medals, players were no longer able to display their MMR on their profiles. As a result, third-party sites like Dotabuff and OpenDota couldn't track their MMR anymore. Third-party sites are only able to display the MMR when they last displayed it on their profiles.
The current game client does not allow you to display your MMR anymore. Luckily for those who kept their profile showcases, their MMR will still be tracked until they remove it. For us who didn't, do not lose hope because there is still a way. **Download the older game client, and display your Solo and Party MMR—Simple!**

## Guide

Here is exactly how I downloaded the older game client and displayed my MMR afterwards.
1. **Opening the Steam console** - To open the Steam console, open your browser and enter this URL on the address bar: `steam://open/console` or click this <a href="steam://open/console" target="blank">link</a>.
2. **Downloading the DOTA 2 depots** - Enter each of the following lines into your Steam console.
```steam
download_depot 570 373303 6890280957208715765
download_depot 570 373301 6419975781203387859
download_depot 570 381451 5541650808080820318
download_depot 570 381452 2631455340609023871
download_depot 570 381453 3681876281399214850
download_depot 570 381454 878961736554813955
download_depot 570 381455 3412334400119737903
download_depot 570 373302 1621449949312630773
```
After each line you should get a message that looks like this:
    ```steam
    Downloading depot 373303 (93 MB) ...
    Downloading depot 373301 (1154 MB) ...
    Downloading depot 381451 (1061 MB) ...
    Downloading depot 381452 (995 MB) ...
    Downloading depot 381453 (1048 MB) ...
    Downloading depot 381454 (770 MB) ...
    Downloading depot 381455 (3001 MB) ...
    ```

3. **Downloading** - There will be no progress bar while you are downloading. However, if you go to your Downloads on Steam and check your current download speed under the Network Usage section, you can see that Steam is actually downloading something. You can also see how much you have downloaded already.

    The total download size would be `8122 MB`.

    Once download is done, you should get these messages:

    ```steam
    Depot download complete : "C:\Program Files (x86)\Steam\steamapps\content\app_570\depot_373303" (177 files, manifest 6890280957208715765)
    Depot download complete : "C:\Program Files (x86)\Steam\steamapps\content\app_570\depot_381453" (20 files, manifest 3681876281399214850)
    Depot download complete : "C:\Program Files (x86)\Steam\steamapps\content\app_570\depot_381451" (20 files, manifest 5541650808080820318)
    Depot download complete : "C:\Program Files (x86)\Steam\steamapps\content\app_570\depot_381454" (20 files, manifest 878961736554813955)
    Depot download complete : "C:\Program Files (x86)\Steam\steamapps\content\app_570\depot_381452" (20 files, manifest 2631455340609023871)
    Depot download complete : "C:\Program Files (x86)\Steam\steamapps\content\app_570\depot_381455" (55 files, manifest 3412334400119737903)
    Depot download complete : "C:\Program Files (x86)\Steam\steamapps\content\app_570\depot_373302" (303 files, manifest 1621449949312630773)
    ```


4. **Putting them together** - What we've downloaded are depots—we still have to put them together in order for this to work. To do this, go to `C:\Program Files (x86)\Steam\steamapps\content\` and create a new folder: `Old Client` or whatever you wanna name it. Then copy the `game` folder from each depot into the `Old Client` folder. Now there should be only one `game` folder left.

5. **Starting the game** - To start the game, go `\game\bin\win64\` and open **`dota2.exe`**

    The game will start and expect to be greeted with a message informing you that your game client is out of date, click OK and proceed.

6. **Updating your profile** - With the old client, you should be able to edit your profile as you did back then. You should also be able to see **MMR changes** on your recent games. Neat.

    **But don't get too excited just yet.** To make sure everything works, go to Heroes, select a hero, and then **demo hero**. You will be prompted by Windows Defender Firewall. **Allow access**, and you should be good to go.


## What I got

For the longest time, my MMR in Dotabuff has been 2089. Now I got 3067, but it never changed since my Solo and Party MMR wasn't displayed on my profile before the matchmaking update. But with this, I was able to show my Solo and Party (now Core and Support) MMR. Dotabuff, OpenDota, and other third-party sites will then be able to track my MMR again and update it on their websites.
