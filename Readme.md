# Dragon Lark Companion – Mobile PWA (ZIMJS) 

Author: Jing Lyu
Version: v.36.0
Known issue: 
The app is already built and capable of being used on a mobile device; 
however during my test with vccode live server or python server, the address can be accessed on the computer, 
but cannot be accessed by iPhone, same WIFI or hotspot both don't work. This is a problem to be solved.

## Overview

This project is a mobile interactive pet experience built with **ZIMJS (canvas-based framework)**.

The app allows the user to hatch and take care of a small dragon named **Lark**.

This project demonstrates how simple mechanics, animation, and mobile sensors can be combined to create an engaging and emotional interactive experience.

---

## Project Focus

* Mobile-first interaction design
* Sensor-based input (tilt & motion)
* Responsive canvas layout
* Character animation and feedback
* Simple but polished gameplay loop

---

## How to Play

### Start the App

* The app begins with a dragon egg
* Tap the egg to hatch it

---

### After Hatching

* A baby dragon (Lark) appears

* Three status orbs are shown at the bottom:

* 🍖 **Food** (hunger)

* 🫧 **Clean** (hygiene)

* 🦋 **Fun** (play)

---

### Take Care of Lark

Tap each orb to interact:

* **Feed** → increases hunger
* **Clean** → washes the dragon
* **Play** → spawns a butterfly

---

### Butterfly Interaction

* A butterfly flies above the dragon
* The dragon looks up and reacts
* This increases the fun value

---

### Tap the Dragon

* The dragon becomes happy
* Plays sound and animation feedback

---

### Device Interaction (Mobile Sensors)

* **Tilt the device**
  → Creates a subtle parallax background movement

* **Shake the device**
  → The dragon becomes dizzy

* A button **"Enable Motion"** is included for iOS permission

---

## Game Mechanics

The dragon has 3 needs:

* Hunger
* Cleanliness
* Fun

These values gradually decrease over time.

---

### Mood System

If a value drops below a threshold:

* Hungry → when hunger is low
* Dirty → when cleanliness is low
* Unhappy → when fun is low

---

### Sleep System

* If no interaction occurs for a period of time
  → The dragon falls asleep

While sleeping:

* Slow breathing animation
* Occasional small movement
* Reduced activity

---

### Idle Behaviors

To create a “living” feeling, the dragon includes:

* Random blinking
* Breathing (scale animation)
* Wing flapping (loop + random pulse)
* Subtle body motion

---

## Technical Features

* Built with **ZIMJS (Canvas framework)**
* Uses mobile sensors:

  * `deviceorientation` (tilt)
  * `devicemotion` (shake)

---

### Visual & Interaction

* Layered animation system (body + wings)
* Parallax background movement
* Particle effects (fireflies, bubbles)
* Smooth transitions between states

---

### Audio

* Background music (looped)
* Sound effects for:

  * Feeding
  * Cleaning
  * Playing
  * Dragon reactions

---

### Data System (Local Storage)

The app uses **localStorage** to save progress:

* Dragon stage (egg / dragon)
* Hunger / Clean / Fun values
* Last interaction time

When the app is reopened:

* Progress is restored automatically

---

### Reset Function

* A reset button is provided
* Allows restarting from the egg stage

---

## Responsive Design

* Designed primarily for **mobile portrait layout**
* Works on desktop for testing

  * Mouse movement replaces tilt interaction

---

## Design Approach

This project focuses on:

* Small scope, high polish
* Emotional connection through animation
* Making a simple system feel alive

Instead of a large or complex game, this app is designed as a **calm and interactive companion experience**.

---

## Important Note (Asset Ownership)

The dragon character **Lark** and all related visual assets are original creations by me (Jing Lyu).

These assets are:

* Not free to use
* Not allowed to be reused, redistributed, or modified without permission

This project is for educational purposes only.
