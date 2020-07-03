---
layout: post

# Post info
title:  "Converting GTA V Steam version to Rockstar version"
author: avi
date: 2020-01-14 7:30 +08:00
last_modified_at: 2020-06-29 00:20 +08:00
categories: [ Gaming ]
tags:
- Grand Theft Auto V

# Extras
image: assets/images/gtav.jpg
photocredit: Grand Theft Auto V
toc: true
imageshadow: true
---

So you got yourself another copy of Grand Theft Auto V. The problem is, you got a different version from your first one this time, and you want to save yourself the trouble of having to download the whole game again, knowing it's the same game. Lucky you, the game can be converted into another version.

The guide shows you exactly how to convert your Steam version of GTA V to Rockstar version or the other way around.

## Steam to Rockstar

1. **Backing up the game folder** - You don't want to download the whole thing again if you mess things up so go ahead and backup your game folder:
```cmd
steamapps\common\Grand Theft Auto V
```

2. **Preparing the game folder** - In your game folder, delete everything except the `updates` folder and the `.rpf` files.
    However, you still need to delete `x64a.rpf`.

3. **Downloading Rockstar Games Launcher**- Download and install <a href="https://socialclub.rockstargames.com/rockstar-games-launcher" target="blank">Rockstar Games Launcher</a> on your PC. Once the download is finished, sign in to your account. Make sure that the account used already owns the game.

4. **Moving the game folder to the installation folder** - You've downloaded Rockstar Games Launcher, you own Grand Theft Auto V, and you already signed in. The next thing you need to do is move or copy your game folder where the launcher is installed:
    ```cmd
    C:\Program Files\Rockstar Games
    ```
    The folder should look like this:<br>
    ![](https://i.imgur.com/y9ECbgl.png)

5. **Installing the missing files** - If you are confident you've done everything correctly, then you can proceed to installation. Run the launcher and install the game. It should detect any existing files and start the download only of the missing files, which shouldn't take much time.

## Rockstar to Steam

1. **Exit Steam** - Before anything else, make sure you exit Steam. Right-click Steam on your system tray and click on Exit.

2. **Moving the game folder into the install directory** - Copy the game folder into this directory:
    ```cmd
    C:\Program Files (x86)\Steam\steamapps\common\
    ```
3. **Preparing the game folder** - In your game folder, delete everything except the `updates` folder and the `.rpf` files. However, you still need to delete `x64a.rpf`.

4. **Installing the missing files** - Run Steam and install GTA V. Steam should detect any existing files and start download only of the missing files.

## Epic Games

This method should work on Epic Games version too. However, I couldn't guarantee it since I haven't tried it out myself unlike Steam to Rockstar Social Club and the other way around.

## Final thoughts
Once you've doone everything correctly, you should be able to launch the game from
