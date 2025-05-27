[← Back to Kinematics](/classical-mechanics/kinematics) | [← Back to Classical Mechanics](/classical-mechanics)

## Introduction
Motion in one dimension is the study of how objects move along a straight line. Whether it's a car driving down a straight road, an elevator moving up and down, or a ball falling to the ground, understanding this basic type of motion is essential for grasping more complex ideas in physics. This note will explain one-dimensional motion in simple terms, with clear examples and practical questions to help you understand the concepts.

---

## Overview

One-dimensional motion is the simplest form of motion, where an object moves along a single straight line, either horizontally (like a car on a road) or vertically (like an elevator). By studying this type of motion, we can understand the basic principles that apply to more complicated movements, such as those in two or three dimensions.

In one-dimensional motion, we focus on three key things:
- **Position**: Where the object is located at any given time.
- **Velocity**: How fast the object is moving and in what direction.
- **Acceleration**: How quickly the object's velocity is changing.

---

## Why is One-Dimensional Motion Important?

1. **Foundation for Complex Motion**: Think of 1D motion as the building block for everything else. When we study motion in 2D or 3D, we break it down into simple 1D components (like horizontal and vertical motion) to make it easier to analyze. Mastering 1D motion first makes solving more complex problems way more manageable!
   
2. **Mathematical Simplicity** – The kinematic equations in 1D are straightforward—no tricky vectors, just clean relationships between displacement, velocity, acceleration, and time. This makes it a perfect starting point for strengthening problem-solving skills and intuition before tackling harder concepts.

3. **Practical Relevance** – So many real-world situations fit into 1D motion, from free-falling objects to cars driving in a straight line. Engineers and physicists use these simplified models to make accurate predictions and solve real problems.

4. **Conceptual Gateway** – Studying 1D motion introduces you to key physics ideas like inertia, forces, momentum, and energy conservation. Once you have these down, you’ll be ready to take on projectile motion, oscillations, and even thermodynamics!

---

## Key Principles of One-Dimensional Motion

1. **Position** – This simply tells us where an object is at a given time. If a car is parked 10 meters from its starting point, its position is 10 meters. Think of it like a snapshot of an object’s location on a number line!

2. **Displacement** – This is all about change in position. If a car moves from 10 meters to 30 meters, its displacement isn’t “30 meters” – it’s the difference, so 20 meters. Remember, displacement depends on start and end points, not the path taken!

3. **Velocity** – This isn’t just speed; it’s speed with direction. A car moving right at 20 m/s has a velocity of +20 m/s, while moving left at the same speed would be -20 m/s. It’s a vector, so direction matters!

4. **Acceleration** – This tells us how fast velocity is changing. If a car speeds up from 20 m/s to 30 m/s in 5 seconds, its acceleration is 2 m/s². It can be positive (speeding up) or negative (slowing down, aka deceleration).

---

## Real-World Examples of One-Dimensional Motion

1. **Cars on a Straight Road**: When a car drives along a straight highway, its motion can be described using one-dimensional motion principles. We can calculate how long it takes to travel a certain distance or how fast it is going.

2. **Elevators**: An elevator moving up and down in a building is a classic example of one-dimensional motion. We can analyze how fast it moves, how long it takes to reach a certain floor, and how quickly it stops.

3. **Falling Objects**: When you drop a ball, it falls straight down due to gravity. This is an example of one-dimensional motion, and we can calculate how long it takes to hit the ground or how fast it is moving when it lands.

4. **Collisions**: In some cases, collisions between objects (like two cars crashing head-on) can be simplified to one-dimensional motion, making it easier to analyze the forces involved.

---

## Common Misconceptions

1. **Distance vs. Displacement**: Distance is how far an object has traveled, while displacement is how far it is from its starting point. For example, if you walk 10 meters forward and then 10 meters back, your distance is 20 meters, but your displacement is 0 meters because you end up where you started.

2. **Speed vs. Velocity**: Speed is how fast an object is moving, while velocity includes both speed and direction. For example, a car moving at 60 km/h to the north has a different velocity than a car moving at 60 km/h to the south.

3. **Acceleration Doesn't Always Mean Speeding Up**: Acceleration can mean speeding up, slowing down, or changing direction. For example, a car slowing down is still accelerating, but in the opposite direction.

4. **Sign Conventions**: In one-dimensional motion, we use positive and negative signs to indicate direction. For example, if we define "to the right" as positive, then "to the left" would be negative. It's important to keep track of these signs to avoid mistakes.

---

## Key Concepts in One-Dimensional Motion

### Position (x)
- **Definition**: The location of an object relative to a reference point (usually called the origin).
- **Example**: If a car is 5 meters to the right of the origin, its position is $x=5$ m.

![Position in One Dimension](/images/physics/kinematics/position-1d.svg)

### Displacement (Δx)
- **Definition**: The change in position of an object from its initial position to its final position.
- **Formula**: $\Delta x=x_{final}-x_{initial}$
- **Example**: If a car moves from $x=2\text{ m}$ to $x=10\text{ m}$, its displacement is: $\Delta x=10\text{ m}-2\text{ m}=8\text{ m}$

![Displacement in One Dimension](/images/physics/kinematics/displacement-1d.svg)



### Velocity (v)


**Definition**  
Velocity isn’t just about speed; it’s speed with a direction. If you’re running **5 m/s to the east**, that’s a velocity of **+5 m/s**. Direction is key here!  

**Average Velocity**  
This is the total displacement divided by the total time:  
$$\bar{v}=\frac{\Delta x}{\Delta t}$$  
For example, if a car travels **100 meters in 10 seconds**, the average velocity is:  
$$\bar{v}=\frac{100 \text{ m}}{10 \text{ s}} = 10 \text{ m/s}$$  

**Instantaneous Velocity**  
The velocity at a specific moment in time, like what you see on a car’s speedometer. It tells you exactly how fast the object is moving **right now**, not over a period of time.


### Acceleration (a)
- **Definition**: Acceleration tells us how quickly the velocity of an object is changing. It can be positive (speeding up) or negative (slowing down, also called deceleration).
- **Formula**: $a=\frac{\Delta v}{\Delta t}$
- **Example**: If a car speeds up from 10 m/s to 20 m/s in 5 seconds, its acceleration is $a=2\text{ m/s}^2$

### Velocity Squared:
$v^2=v_0^2+2a(x-x_0)$

This equation relates the final velocity to the initial velocity, acceleration, and displacement, where:
- $v$ = final velocity
- $v_0$ = initial velocity
- $a$ = acceleration
- $x$ = final position
- $x_0$ = initial position

---

## Equations of Motion

When an object is moving with constant acceleration, we can use the following equations:

1. **Final Velocity**:
   $v=v_0+at$
   where:
   - $v$ = final velocity
   - $v_0$ = initial velocity
   - $a$ = acceleration
   - $t$ = time

2. **Position**:
   $x=x_0+v_0t+\frac{1}{2}at^2$
   where:
   - $x$ = final position
   - $x_0$ = initial position

3. **Velocity Squared**:
   $v^2=v_0^2+2a(x-x_0)$
   - This equation relates the final velocity to the initial velocity, acceleration, and displacement.

---

## Free Fall Motion

Free fall occurs when an object moves under the influence of gravity alone, without air resistance. On Earth, all objects in free fall experience a constant downward acceleration due to gravity ($g$), which is approximately $9.81\text{ m/s}^2$.

### Constant Acceleration in Free Fall
In free fall, every object experiences the same acceleration regardless of its mass. This means a feather and a hammer would fall at exactly the same rate in a vacuum. The acceleration remains constant throughout the fall, causing the object's velocity to increase by 9.81 meters per second every second of falling.

### Direction and Motion
When analyzing free fall, we must carefully consider direction. For objects falling downward, we typically consider the acceleration as positive (+9.81 m/s²). However, for objects thrown upward, while the magnitude of acceleration remains the same, we consider it negative (-9.81 m/s²) because it opposes the initial motion. Even at the highest point of an upward throw, when the velocity momentarily becomes zero, the acceleration remains constant at -9.81 m/s².

### Mathematical Description
The motion of objects in free fall can be described by several key equations:

For vertical motion (using y for height):
$y = y_0 + v_0t - \frac{1}{2}gt^2$ (Position)
$v = v_0 - gt$ (Velocity)

For objects thrown upward, we can calculate:
Time to reach maximum height: $t_{max} = \frac{v_0}{g}$
Maximum height reached: $h_{max} = \frac{v_0^2}{2g}$

### Real-World Applications
Consider dropping a ball from rest. Initially, its velocity is zero ($v_0 = 0$). After one second, it reaches a velocity of 9.81 m/s downward. After two seconds, its velocity doubles to 19.62 m/s downward. The distance fallen can be calculated using $d = \frac{1}{2}gt^2$.

![Free Fall Motion](/images/physics/kinematics/free-fall.svg)
*Free Fall Motion*

The diagram above shows:
- The ball's position at different time points (t = 0s, 1s, 2s, 3s)
- The increasing velocity as the ball falls
- The constant downward acceleration (red arrows)
- The parabolic path traced by the ball

When throwing a ball upward, the story becomes more interesting. The ball starts with an initial upward velocity, gradually slows due to gravity, reaches a maximum height where its velocity becomes zero, and then falls back down. In an ideal situation (ignoring air resistance), the ball would return to its starting height with the same speed it was thrown up with.

### Example: Ball Thrown Upward

Let's analyze a ball thrown upward with an initial velocity of 20 m/s:

![Ball Thrown Upward](/content/classical-mechanics/kinematics/images/ball-thrown-upward.svg)
*Ball Thrown Upward*

Key points in the motion:
- At t = 0s: Ball is thrown upward with v = 20 m/s
- At t = 1s: Ball is still rising but slower (v = 10.19 m/s upward)
- At t = 2.04s: Ball reaches maximum height, momentarily stops (v = 0 m/s)
- At t = 3s: Ball is falling with v = -10.19 m/s downward
- At t = 4.08s: Ball returns to starting point (v = -20 m/s downward)

Calculations used:
1. Velocity at any time: $v = v_0 - gt$
   - where $v_0 = 20$ m/s (initial velocity upward)
   - $g = 9.81$ m/s² (acceleration due to gravity)

2. Time to reach maximum height:
   - At max height, $v = 0$
   - $0 = v_0 - gt$
   - $t = v_0/g = 20/9.81 = 2.04$ s

3. Maximum height reached:
   - Using $h = v_0t - \frac{1}{2}gt^2$
   - $h = (20 × 2.04) - \frac{1}{2}(9.81 × 2.04^2)$
   - $h = 40.8 - 20.41$
   - $h = 20.39$ meters

4. Total time of flight:
   - Due to symmetry, total time = $2 × t_{max}$
   - $= 2 × 2.04 = 4.08$ s

This example demonstrates:
1. Constant acceleration (g = -9.81 m/s²)
2. Symmetric velocity profile (equal magnitude at start and end)
3. Maximum height occurs at v = 0 m/s
4. Total time of flight is twice the time to maximum height

### Common Misconceptions
A common misconception is that heavier objects fall faster than lighter ones. Galileo disproved this idea centuries ago, but the presence of air resistance in our everyday experience reinforces this false belief. In reality, objects fall at different rates on Earth primarily because of air resistance, not their mass.

This was dramatically demonstrated during the Apollo 15 mission in 1971, when astronaut David Scott performed the famous "hammer-feather drop" experiment on the Moon. In the Moon's airless environment, both the hammer and feather fell at exactly the same rate, hitting the lunar surface simultaneously.

### Understanding Air Resistance
While our equations assume ideal conditions without air resistance, real-world free fall is affected by air resistance. This force opposes motion and increases with velocity, eventually leading to a terminal velocity where the upward air resistance equals the downward gravitational force.

---

## Graphical Analysis of Motion

Graphs are a useful way to visualize motion. Here are the three main types of graphs used in one-dimensional motion:

### 1. Position-Time Graphs:
- The slope of the graph gives the velocity of the object.
- A straight line indicates constant velocity, while a curved line indicates acceleration.

![Position-time graph](/images/physics/kinematics/position-time-graph.svg)
*Position-time graph showing different types of motion: constant velocity (straight line) and acceleration (curved line)*

### 2. Velocity-Time Graphs:
- The slope of the graph gives the acceleration of the object.
- The area under the curve gives the displacement of the object.

![Velocity-time graph](/images/physics/kinematics/velocity-time-graph.svg)
*Velocity-time graph showing acceleration (slope) and displacement (area under curve)*

### 3. Acceleration-Time Graphs:
- The area under the curve gives the change in velocity.
- A flat line indicates constant acceleration.

![Acceleration-time graph](/images/physics/kinematics/acceleration-time-graph.svg)
*Acceleration-time graph showing constant acceleration (flat line) and the area representing velocity change*

---

## Questions and Answers

### Q1: What is the difference between distance and displacement?
**A1**: Distance is the total path length traveled by an object, while displacement is the change in position from the starting point to the ending point. Distance is always positive, but displacement can be positive, negative, or zero.

### Q2: How do you calculate average velocity?

**A2**: Average velocity is calculated by dividing the total displacement by the total time:
$\bar{v}=\frac{\Delta x}{\Delta t}$

### Q3: What does the slope of a position-time graph represent?
**A3**: The slope of a position-time graph represents the velocity of the object. A steeper slope means a higher velocity.

### Q4: What is the acceleration due to gravity on Earth?

**A4**: The acceleration due to gravity on Earth is approximately $9.81\text{ m/s}^2$ downward.

### Q5: How can you determine the displacement from a velocity-time graph?
**A5**: The displacement can be found by calculating the area under the velocity-time graph. The area represents the total displacement.

### Q6: A car decelerates from 30 m/s to rest in 10 seconds. What is its acceleration?

**A6**: Using the equation $a=\frac{\Delta v}{\Delta t}$
where $\Delta v=0-30\text{ m/s}=-30\text{ m/s}$ and $\Delta t=10\text{ s}$:

$a=\frac{-30\text{ m/s}}{10\text{ s}}=-3\text{ m/s}^2$

The negative sign indicates that the car is decelerating.

---

## Try Out Questions

### Q1: A car starts from rest and accelerates at $3\text{ m/s}^2$ for 8 seconds. What is its final velocity?

**A1**: Using the equation $v=v_0+at$
where $v_0=0$, $a=3\text{ m/s}^2$, and $t=8\text{ s}$:
$v=0+(3\text{ m/s}^2)(8\text{ s})=24\text{ m/s}$

### Q2: A ball is dropped from a height of 20 meters. How long does it take to hit the ground? (Assume $g=9.81\text{ m/s}^2$)

**A2**: Using the equation $x=x_0+v_0t+\frac{1}{2}at^2$
where $x_0=20\text{ m}$, $v_0=0$, and $a=g=9.81\text{ m/s}^2$:
$0=20\text{ m}+0\cdot t+\frac{1}{2}(9.81\text{ m/s}^2)t^2$
$t^2=\frac{20\text{ m}}{4.905\text{ m/s}^2}\approx 4.08\text{ s}^2$
$t\approx \sqrt{4.08\text{ s}^2}\approx 2.02\text{ s}$

### Q3: A train travels 300 meters in 15 seconds. What is its average speed?

**A3**: Average speed is calculated as the total distance traveled divided by the total time:
$\text{Average speed}=\frac{300\text{ m}}{15\text{ s}}=20\text{ m/s}$

### Q4: An object is moving with a constant velocity of 12 m/s. What is its acceleration?

**A4**: Since the velocity is constant, there is no change in velocity over time. Therefore, the acceleration is zero:
$a=0\text{ m/s}^2$

### Q5: A car decelerates from 30 m/s to rest in 10 seconds. What is its acceleration?

**A5**: Using the equation $a=\frac{\Delta v}{\Delta t}$
where $\Delta v=0-30\text{ m/s}=-30\text{ m/s}$ and $\Delta t=10\text{ s}$:

$a=\frac{-30\text{ m/s}}{10\text{ s}}=-3\text{ m/s}^2$

The negative sign indicates that the car is decelerating.

---

[← Back to Kinematics](/classical-mechanics/kinematics) | [← Back to Classical Mechanics](/classical-mechanics)
