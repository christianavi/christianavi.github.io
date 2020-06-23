---
layout: post

# Post info
title:  "Converting Steam version GTA V to Rockstar version"
author: avi
date: 2020-01-14 7:30 +08:00
last_modified_at:
categories: [ Gaming ]
tags:
- Grand Theft Auto V

# Extras
image: assets/images/gtav.jpg
toc: true
---

So you got yourself another copy of your favorite game, Grand Theft Auto V. You're so addicted to the game you bought another account last Christmas. The problem is, you got a different version from your first one this time, and you want to save yourself the trouble of having to download the whole game again, knowing it's the same game. Here is how you convert the Steam version of GTA V to Rockstar version.

The guide shows you exactly how to convert your Steam version of GTA V to Rockstar version or the other way around.

## Steam to Rockstar

 **Backing up the game folder**<br>
You don't want to download the whole thing again if you mess things up so go ahead and backup your game folder:
```cmd
steamapps\common\Grand Theft Auto V
```

**Preparing the game folder**<br>
In your game folder, delete everything except the `updates` folder and the `.rpf` files. However, you still need to delete `x64a.rpf`.

**Downloading Rockstar Games Launcher**<br>
Download and install <a href="https://socialclub.rockstargames.com/rockstar-games-launcher" target="blank">Rockstar Games Launcher</a> on your PC. Once the download is finished, sign in to your account. Make sure that the account used already owns the game.

**Moving the game folder to the installation folder**<br>
You've downloaded Rockstar Games Launcher, you own Grand Theft Auto V, and you already signed in. The next thing you need to do is move or copy your game folder where the launcher is installed:

```cmd
C:\Program Files\Rockstar Games
```
The folder should look like this:

![](https://i.imgur.com/y9ECbgl.png)

**Installing the missing files**<br>
If you are confident you've done everything correctly, then you can proceed to installation. Run the launcher and install the game. It should detect any existing files and start the download only of the missing files, which shouldn't take much time.

After downloading, you should be able to play.

## Rockstar to Steam

**Exit Steam**<br>
Before anything else, make sure you exit Steam. Right-click Steam on your system tray and click on Exit.

**Moving the game folder into the install directory**<br>
Copy the game folder into this directory:

```cmd
C:\Program Files (x86)\Steam\steamapps\common\
```
**Preparing the game folder**<br>
In your game folder, delete everything except the `updates` folder and the `.rpf` files. However, you still need to delete `x64a.rpf`.

**Installing the missing files**<br>
Run Steam and install GTA V. Steam should detect any existing files and start download only of the missing files.

## Epic Games

This method should work on Epic Games version too. However, I couldn't guarantee it since I haven't tried it out myself unlike Steam to Rockstar Social Club and the other way around.
