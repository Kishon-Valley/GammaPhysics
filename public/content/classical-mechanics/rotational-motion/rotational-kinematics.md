Rotational motion is the motion of an object around a fixed axis. It is a fundamental concept in physics and is crucial for analyzing the behavior of rotating objects, such as wheels, gears, and planets. The kinematics of rotational motion describes the motion of objects without considering the forces causing the motion.

---

## Definition of Rotational Motion

Rotational motion occurs when an object rotates around a fixed axis. The position of the object is described by its **angular displacement**, and its motion is characterized by **angular velocity** and **angular acceleration**.

---

## Key Concepts in Rotational Motion

### 1. **Angular Displacement ($\theta$)**  
Angular displacement is the angle through which an object rotates. It is measured in **radians (rad)**.  
$$
\theta = \frac{s}{r}
$$
where:
- \( s \) = arc length (in meters)
- \( r \) = radius of the circular path (in meters)

**Example**: If a wheel rotates such that a point on its edge moves 2 meters along the circumference and the wheel has a radius of 0.5 meters, the angular displacement is:
$$
\theta = \frac{2 \text{ m}}{0.5 \text{ m}} = 4 \text{ rad}
$$

---

### 2. **Angular Velocity ($\omega$)**  
Angular velocity is the rate of change of angular displacement. It is measured in **radians per second (rad/s)**.  
$$
\omega = \frac{d\theta}{dt}
$$

**Example**: If a wheel rotates through an angle of 10 radians in 2 seconds, its angular velocity is:
$$
\omega = \frac{10 \text{ rad}}{2 \text{ s}} = 5 \text{ rad/s}
$$

---

### 3. **Angular Acceleration ($\alpha$)**  
Angular acceleration is the rate of change of angular velocity. It is measured in **radians per second squared (rad/s²)**.  
$$
\alpha = \frac{d\omega}{dt}
$$

**Example**: If the angular velocity of a wheel increases from 2 rad/s to 8 rad/s in 3 seconds, its angular acceleration is:
$$
\alpha = \frac{8 \text{ rad/s} - 2 \text{ rad/s}}{3 \text{ s}} = 2 \text{ rad/s}^2
$$

---

## Equations of Rotational Kinematics

The following equations describe the relationship between angular displacement, angular velocity, angular acceleration, and time for uniformly accelerated rotational motion:

1. **Angular Velocity as a Function of Time**:
   $$
   \omega = \omega_0 + \alpha t
   $$

2. **Angular Displacement as a Function of Time**:
   $$
   \theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2
   $$

3. **Angular Velocity as a Function of Angular Displacement**:
   $$
   \omega^2 = \omega_0^2 + 2 \alpha (\theta - \theta_0)
   $$

where:
- $\omega_0$ = initial angular velocity (in rad/s)
- $\theta_0$ = initial angular displacement (in rad)
- $t$ = time (in seconds)

---

## Relationship Between Linear and Rotational Motion

The linear motion of a point on a rotating object is related to its rotational motion by the following equations:

1. **Linear Velocity ($v$)**:
   $$
   v = r \omega
   $$

2. **Linear Acceleration ($a$)**:
   - **Tangential Acceleration**:
     $$
     a_t = r \alpha
     $$
   - **Centripetal Acceleration**:
     $$
     a_c = r \omega^2
     $$

where:
- \( r \) = radius of the circular path (in meters)

---

## Real-World Examples of Rotational Motion

1. **Wheels**: The rotation of car wheels is an example of rotational motion.
2. **Ceiling Fans**: The blades of a ceiling fan rotate around a fixed axis.
3. **Planetary Motion**: Planets rotate around their axes and revolve around the Sun.
4. **Gears**: Gears in machines rotate to transmit motion and force.
5. **Gyroscopes**: Gyroscopes use rotational motion to maintain orientation.

---

## Common Misconceptions About Rotational Motion

1. **Angular Velocity is the Same as Linear Velocity**: Angular velocity describes the rate of rotation, while linear velocity describes the speed of a point on the rotating object.
2. **Angular Acceleration is Always Constant**: Angular acceleration can vary depending on the forces acting on the object.
3. **Rotational Motion is Independent of Linear Motion**: Rotational motion and linear motion are closely related, as seen in the equations $v = r \omega$ and $a_t = r \alpha$.

---

## Advanced Concepts in Rotational Motion

### 1. **Moment of Inertia**
The moment of inertia ($I$) is a measure of an object's resistance to changes in its rotational motion. It depends on the mass distribution relative to the axis of rotation:
$$
I = \int r^2 \, dm
$$

### 2. **Torque**
Torque ($\tau$) is the rotational equivalent of force and is defined as:
$$
\tau = \vec{r} \times \vec{F}
$$

where:
- $\vec{r}$ = distance from the axis of rotation to the point where the force is applied
- $\vec{F}$ = force applied

### 3. **Rotational Kinetic Energy**
The kinetic energy associated with rotational motion is given by:
$$
KE_{\text{rot}} = \frac{1}{2} I \omega^2
$$

---

## Angular Displacement and Period

![Angular Displacement](../../../images/physics/rotational/angular-displacement.svg)

Angular displacement measures the amount of rotation, while period and frequency describe the time characteristics of rotational motion.

## Energy and Work

![Rotational Energy](../../../images/physics/rotational/rotational-energy.svg)

Rotational motion involves both kinetic energy due to rotation and the work done by torques.

## Rolling Motion

![Rolling Motion](../../../images/physics/rotational/rolling-motion.svg)

Rolling motion combines both translational and rotational motion, with interesting relationships between linear and angular quantities.

---

## Practice Problems

### Problem 1: Angular Velocity
A wheel rotates with an initial angular velocity of $5 \text{ rad/s}$. If it accelerates uniformly at $2 \text{ rad/s}^2$ for 10 seconds, what is its final angular velocity?

**Solution**:
Using the equation:
$$
\omega = \omega_0 + \alpha t
$$
$$
\omega = 5 \text{ rad/s} + (2 \text{ rad/s}^2 \times 10 \text{ s}) = 25 \text{ rad/s}
$$

### Problem 2: Angular Displacement
A wheel starts from rest and accelerates uniformly at $3 \text{ rad/s}^2$ for 5 seconds. What is its angular displacement during this time?

**Solution**:
Using the equation:
$$
\theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2
$$

Since the wheel starts from rest, $\theta_0 = 0$ and $\omega_0 = 0$:
$$
\theta = 0 + 0 + \frac{1}{2} \times 3 \text{ rad/s}^2 \times (5 \text{ s})^2 = 37.5 \text{ rad}
$$

### Problem 3: Linear Velocity
A point on the edge of a wheel with a radius of 0.5 meters rotates with an angular velocity of $10 \text{ rad/s}$. What is the linear velocity of the point?

**Solution**:
Using the equation:
$$
v = r \omega
$$
$$
v = 0.5 \text{ m} \times 10 \text{ rad/s} = 5 \text{ m/s}
$$

### Problem 4: Centripetal Acceleration
A wheel with a radius of 2 meters rotates with an angular velocity of $4 \text{ rad/s}$. What is the centripetal acceleration of a point on the edge of the wheel?

**Solution**:
Using the equation:
$$
a_c = r \omega^2
$$
$$
a_c = 2 \text{ m} \times (4 \text{ rad/s})^2 = 32 \text{ m/s}^2
$$

### Problem 5: Angular Acceleration
A wheel slows down from an angular velocity of $20 \text{ rad/s}$ to $10 \text{ rad/s}$ in 5 seconds. What is its angular acceleration?

**Solution**:
Using the equation:
$$
\omega = \omega_0 + \alpha t
$$
Rearranging for angular acceleration:
$$
\alpha = \frac{\omega - \omega_0}{t} = \frac{10 \text{ rad/s} - 20 \text{ rad/s}}{5 \text{ s}} = -2 \text{ rad/s}^2
$$
The negative sign indicates deceleration.

### Problem 6: Rotational Kinematics
A wheel starts from rest and accelerates uniformly at $4 \text{ rad/s}^2$ for 8 seconds. What is its angular displacement and final angular velocity?

**Solution**:
1. **Final Angular Velocity**:
   $$
   \omega = \omega_0 + \alpha t = 0 + (4 \text{ rad/s}^2 \times 8 \text{ s}) = 32 \text{ rad/s}
   $$

2. **Angular Displacement**:
   $$
   \theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2 = 0 + 0 + \frac{1}{2} \times 4 \text{ rad/s}^2 \times (8 \text{ s})^2 = 128 \text{ rad}
   $$

---

# 5.1 Rotational Kinematics

Rotational motion is the movement of an object around a fixed axis or point. Understanding rotational kinematics is crucial for analyzing systems like wheels, gears, and celestial bodies.

## Angular Quantities

![Angular Quantities](../../../images/physics/rotational/angular-quantities.svg)
Angular quantities describe the rotational motion of objects. These include angular position (θ), angular velocity (ω), and angular acceleration (α).

## Linear vs Angular Motion

![Rotational Equations](../../../images/physics/rotational/rotational-equations.svg)
The relationship between linear and angular motion helps us understand how points at different distances from the rotation axis move.

## Types of Acceleration

![Acceleration Types](../../../images/physics/rotational/acceleration-types.svg)
In rotational motion, we encounter different types of acceleration that affect both the speed and direction of motion.

## Real-World Applications

![Applications](../../../images/physics/rotational/applications.svg)
Rotational motion appears in many everyday situations, from bicycle wheels to clock mechanisms and gear systems.
