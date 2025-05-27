# 5.2 Dynamics of Rotational Motion

## Introduction
Dynamics of rotational motion extends Newton's laws to rotating objects, introducing concepts like torque and moment of inertia. These principles are crucial for understanding everything from spinning tops to planetary motion.

## Key Concepts

### Torque (τ)
Torque is the rotational analog of force, causing angular acceleration in rotating objects.

![Torque diagram showing force, radius vector, and resulting torque](/images/classical-mechanics/rotational-motion/torque.svg)

- **Definition**: τ = r × F (vector cross product)
- **Scalar form**: τ = rF sin θ
- **Units**: Newton-meters (N⋅m)
- **Direction**: Determined by the right-hand rule

### Moment of Inertia (I)
The moment of inertia represents an object's resistance to rotational acceleration.

![Common moments of inertia for different shapes](/images/classical-mechanics/rotational-motion/moment-of-inertia.svg)

- **Definition**: I = Σ mr²
- **Common shapes**:
  - Point mass: I = mr²
  - Solid disk: I = ½mr²
  - Hollow cylinder: I = mr²
  - Solid sphere: I = ⅖mr²

### Rotational Newton's Second Law
Just as F = ma in linear motion, we have:

τ = Iα

Where:
- τ is the net torque
- I is the moment of inertia
- α is the angular acceleration

### Rotational Kinetic Energy
The energy of a rotating object is given by:

KErot = ½Iω²

Where:
- I is the moment of inertia
- ω is the angular velocity

## Angular Momentum and Conservation

### Angular Momentum (L)
![Conservation of angular momentum illustrated with a figure skater](/images/classical-mechanics/rotational-motion/angular-momentum.svg)

- **Definition**: L = Iω
- **Conservation**: In the absence of external torques, angular momentum is conserved
- **Applications**:
  - Figure skater spins (as shown above)
  - Planetary motion
  - Gyroscopes

## Problem-Solving Strategy

1. **Identify the System**
   - Determine the axis of rotation
   - Identify all torques acting on the system

2. **Draw a Diagram**
   - Show all forces and their points of application
   - Indicate the direction of rotation

3. **Apply Equations**
   - Use τ = Iα for rotational acceleration
   - Consider energy conservation if applicable
   - Check for angular momentum conservation

4. **Solve and Check**
   - Ensure units are consistent
   - Verify that the answer makes physical sense

## Examples

### Example 1: Spinning Disk
A disk of radius 0.2 m and mass 2 kg is subject to a tangential force of 5 N. Calculate:
1. The torque applied
2. The angular acceleration
3. The rotational kinetic energy after 2 seconds

**Solution**:
1. τ = rF = (0.2 m)(5 N) = 1 N⋅m
2. I = ½mr² = ½(2 kg)(0.2 m)² = 0.04 kg⋅m²
   α = τ/I = 1/0.04 = 25 rad/s²
3. ω = αt = 25(2) = 50 rad/s
   KErot = ½Iω² = ½(0.04)(50)² = 50 J

### Example 2: Conservation of Angular Momentum
A figure skater spinning with arms extended (I = 1.2 kg⋅m²) at 2 rad/s pulls their arms in, reducing their moment of inertia to 0.3 kg⋅m². Find their new angular velocity.

**Solution**:
- Initial angular momentum: L₁ = I₁ω₁ = (1.2)(2) = 2.4 kg⋅m²/s
- Conservation of angular momentum: L₁ = L₂
- Therefore: I₁ω₁ = I₂ω₂
- ω₂ = (I₁ω₁)/I₂ = (1.2 × 2)/0.3 = 8 rad/s

## Applications

1. **Mechanical Systems**
   - Gears and pulleys
   - Flywheels in engines
   - Spinning wheels and gyroscopes

2. **Sports**
   - Figure skating spins
   - Diving rotations
   - Baseball pitching mechanics

3. **Space Technology**
   - Satellite stabilization
   - Spacecraft attitude control
   - Momentum wheels

## Practice Problems

1. A solid cylinder of mass 4 kg and radius 0.1 m is free to rotate about its axis. A string is wrapped around it and pulled with a force of 20 N. Calculate:
   - The moment of inertia
   - The angular acceleration
   - The linear acceleration of the unwrapping string

2. A rotating platform of moment of inertia 5 kg⋅m² is spinning at 120 rpm. A 2 kg object is dropped onto it at a distance of 0.5 m from the axis. Calculate the new angular velocity.

3. A flywheel with moment of inertia 2 kg⋅m² is accelerated from rest by a constant torque of 4 N⋅m. How long will it take to reach an angular velocity of 100 rad/s?
