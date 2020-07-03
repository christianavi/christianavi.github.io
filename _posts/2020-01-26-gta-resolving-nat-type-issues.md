---
layout: post

# Post info
title: 'Resolving NAT type issues for GTA V'
author: avi
last_modified_at: 2020-06-28 23:06:00 +08:00
categories:
- Gaming
tags:
- Grand Theft Auto V

# Extras
image: assets/images/stnc.jpg
photocredit: Romel Merino
toc: true
imageshadow: true
rating: 4
---

Getting disconnected from online multiplayer games is always frustrating and we all had our fair share of disconnections. Grand Theft Auto Online is one of the games where players often experience disconnections. It turns out it has something to do with <a href="https://en.wikipedia.org/wiki/Network_address_translation" target="blank">NAT</a> type, which may be "strict." This means that it is blocking ports used by the game. Rockstar Games support provided two possible solutions for this; enabling <a href="https://en.wikipedia.org/wiki/Universal_Plug_and_Play" target="blank">UPnP</a> or setting up a <a href="https://en.wikipedia.org/wiki/Port_forwarding" target="blank">port-forwarding</a> rule on your router.

This guide only covers resolving NAT type issues by enabling UPnP and is meant for modems used by PLDT Home Fibr and PLDT Home DSL subscribers. In any case, those who own other modems or subscribed to other ISPs may still follow along.

### Getting the necessary information
 Open **Command Prompt** and enter `ipconfig` and you should get something like this:

```cmd
Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::4bf:7839:ad59:2ff4%6
   IPv4 Address. . . . . . . . . . . : 192.168.1.6
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : fe80::9261:cff:fe41:e95%6
                                       192.168.1.1                                       
```
Take note of your **IPv4 Address**, **Subnet Mask**, and **Default Gateway**.

### Setting up a static IP
For this to work, your PC is gonna need a static IP. To do this, follow the following steps:
1. Click on the **Start menu**, then click on **Control Panel**.
2. Click on **Network and Internet**.
3. Click on **Change Adapter Settings**.
4. Right click on the Wi-Fi network you are connected to, then click **Properties**.
5. Select **Internet Protocol Version 4**.
6. Click **Properties**.
7. Select **Use the following IP address** and enter the **IP address**, **Subnet mask**, **Default gateway**.
```cmd
IP addresses:

   IP address. . . . . . . . . . . . : 192.168.1.6
   Subnet mask . . . . . . . . . . . : 255.255.255.0
   Default gateway . . . . . . . . . : 192.168.1.1
```
8. Enter the following **DNS server addresses**:
```cmd
DNS server addresses:

   Preferred DNS server. . . . . . . : 1.1.1.1
   Alternate DNS server. . . . . . . : 1.0.0.1
```

### Enabling UPnP

1. Open your browser and type in your modem's **default gateway** on the address bar.
2. Login with an account with **admin privileges**.

*Check this <a href="https://gist.github.com/christianavi/5b07244b272edbf1b653717a63c1ce5f" target="blank">link</a> to find out your modem's admin credentials.*

#### PLDT Home Fibr

1. Go to **Application** tab. 
2. Select **UPnP** on the sidebar and select **enable**.
3. Click on **Apply**.

![](https://i.imgur.com/pEODBat.png)


#### PLDT Home DSL

1. Go to the **Service** tab and then select **UPnP** on the sidebar.
2. Select **Enable**.
3. Click on **Apply Changes**.

![](https://i.imgur.com/uIBqH9i.png)

#### Other ISPs
I have little to no experience with modems provided by other ISPs. If you have a different modem or subscribed to another ISP, your router may look different, but there's a good chance you find the same settings if you look around for UPnP. If you cannot find UPnP on your modem, port-forwarding is the way to go. If nothing works, you can always use a VPN.