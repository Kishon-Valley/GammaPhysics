## Introduction to Angular Kinematics

[Click here to view Angular Displacement and Right-Hand Rule Animation ↗️](https://shm-animation.vercel.app/right-hand-rule)

Angular kinematics is the study of the motion of objects in rotational motion without considering the forces that cause the motion. It deals with concepts such as angular displacement, angular velocity, and angular acceleration. These quantities are analogous to their linear counterparts (displacement, velocity, and acceleration) but are specific to rotational motion.

---
![Angular Quantities](/images/classical-mechanics/rotational-motion/angular-quantities.svg)

## Key Concepts

1. **Angular Displacement ($\theta$)**: The angle through which an object rotates.
2. **Angular Velocity ($\omega$)**: The rate of change of angular displacement.
3. **Angular Acceleration ($\alpha$)**: The rate of change of angular velocity.

## Angular Displacement

Angular displacement is the angle through which an object rotates about a fixed axis. It is usually measured in radians, degrees, or revolutions.

### Radians vs. Degrees

- **Radian**: A unit of angular measure where the angle is defined as the ratio of the arc length to the radius of the circle. One full revolution is $2\pi$ radians.
- **Degree**: A unit of angular measure where one full revolution is 360 degrees.

### Conversion Between Radians and Degrees

$$\text{Radians} = \text{Degrees} \times \left( \frac{\pi}{180} \right)$$
$$\text{Degrees} = \text{Radians} \times \left( \frac{180}{\pi} \right)$$

### Example

Convert 45 degrees to radians:

$$45^\circ \times \left( \frac{\pi}{180} \right) = \frac{\pi}{4} \text{ radians}$$



Angular displacement is a vector quantity, meaning it has both magnitude and direction. The direction of angular displacement is given by the right-hand rule: if you curl the fingers of your right hand in the direction of rotation, your thumb points in the direction of the angular displacement vector.





In practical terms, angular displacement can be visualized as the angle swept by a radius vector from its initial position to its final position. For example, if a wheel rotates through an angle of 90 degrees, the angular displacement is $\frac{\pi}{2}$ radians.

---
## Angular Velocity

Angular velocity is the rate at which an object rotates about an axis. It is defined as the change in angular displacement per unit time.

### Average Angular Velocity

$$ \omega_{\text{avg}} = \frac{\Delta \theta}{\Delta t} $$

Where:
- $ \Delta \theta $ is the change in angular displacement.
- $ \Delta t $ is the change in time.

### Instantaneous Angular Velocity

$$ \omega = \frac{d\theta}{dt} $$

Where:
- $ \frac{d\theta}{dt} $ is the derivative of angular displacement with respect to time.

### Units of Angular Velocity

- **Radians per second (rad/s)**
- **Degrees per second (deg/s)**
- **Revolutions per minute (rpm)**

### Example

A wheel rotates through an angle of 120 degrees in 2 seconds. Calculate the average angular velocity in radians per second.

$$ \omega_{\text{avg}} = \frac{120^\circ \times \left( \frac{\pi}{180} \right)}{2 \text{ s}} = \frac{2\pi}{3} \text{ rad/s} $$



Angular velocity is also a vector quantity, with its direction given by the right-hand rule. The magnitude of angular velocity indicates how fast an object is rotating, while the direction indicates the axis of rotation.

For example, if a Ferris wheel completes one full revolution (360 degrees or $2\pi$ radians) in 30 seconds, its average angular velocity is:

$$ \omega_{\text{avg}} = \frac{2\pi \text{ radians}}{30 \text{ s}} = \frac{\pi}{15} \text{ rad/s} $$

---
## Angular Acceleration

Angular acceleration is the rate at which the angular velocity of an object changes with time. It is defined as the change in angular velocity per unit time.

### Average Angular Acceleration

$$ \alpha_{\text{avg}} = \frac{\Delta \omega}{\Delta t} $$

Where:
- $ \Delta \omega $ is the change in angular velocity.
- $ \Delta t $ is the change in time.

### Instantaneous Angular Acceleration

$$ \alpha = \frac{d\omega}{dt} $$

Where:
- $ \frac{d\omega}{dt} $ is the derivative of angular velocity with respect to time.

### Units of Angular Acceleration

- **Radians per second squared (rad/s²)**
- **Degrees per second squared (deg/s²)**

### Example

A spinning disc changes its angular velocity from 10 rad/s to 20 rad/s in 5 seconds. Calculate the average angular acceleration.

$$ \alpha_{\text{avg}} = \frac{20 \text{ rad/s} - 10 \text{ rad/s}}{5 \text{ s}} = 2 \text{ rad/s}^2 $$


Angular acceleration is a vector quantity, with its direction given by the change in angular velocity. If the angular velocity is increasing, the angular acceleration is in the same direction as the angular velocity. If the angular velocity is decreasing, the angular acceleration is in the opposite direction.

For example, if a car's wheels are spinning at 100 rad/s and come to a stop in 10 seconds, the average angular acceleration is:

$$ \alpha_{\text{avg}} = \frac{0 \text{ rad/s} - 100 \text{ rad/s}}{10 \text{ s}} = -10 \text{ rad/s}^2 $$

The negative sign indicates that the angular acceleration is in the opposite direction to the initial angular velocity, causing the wheels to slow down.

---
## Relationship Between Linear and Angular Quantities

![Linear and Angular Relations](/images/classical-mechanics/rotational-motion/linear-angular-relations.svg)

When an object undergoes rotational motion, there are important relationships between its linear and angular quantities:

### Linear Velocity and Angular Velocity

$$ v = r\omega $$

Where:
- $ v $ is the linear velocity.
- $ r $ is the radius of the circular path.
- $ \omega $ is the angular velocity.

### Linear Acceleration and Angular Acceleration

$$ a = r\alpha $$

Where:
- $ a $ is the linear acceleration.
- $ r $ is the radius of the circular path.
- $ \alpha $ is the angular acceleration.

### Example

A wheel of radius 0.5 meters has an angular velocity of 10 rad/s. Calculate the linear velocity of a point on the rim of the wheel.

$$ v = r\omega = 0.5 \text{ m} \times 10 \text{ rad/s} = 5 \text{ m/s} $$



The relationship between linear and angular quantities is crucial in many real-world applications. For instance, in a car, the linear speed of the car is related to the angular speed of its wheels. If the wheels have a radius of 0.3 meters and are rotating at 20 rad/s, the car's speed is:

$$ v = r\omega = 0.3 \text{ m} \times 20 \text{ rad/s} = 6 \text{ m/s} $$

Similarly, the linear acceleration of a point on the rim of a rotating object is related to its angular acceleration. If a wheel has an angular acceleration of 4 rad/s² and a radius of 0.2 meters, the linear acceleration of a point on the rim is:

$$ a = r\alpha = 0.2 \text{ m} \times 4 \text{ rad/s}^2 = 0.8 \text{ m/s}^2 $$

---
## Equations of Rotational Kinematics

The equations of rotational kinematics are analogous to the equations of linear kinematics. They describe the motion of an object undergoing constant angular acceleration.


### Rotational Kinematic Equations

1. **Angular Velocity as a Function of Time**:
   $$ \omega = \omega_0 + \alpha t $$

2. **Angular Displacement as a Function of Time**:
   $$ \theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2 $$

3. **Angular Velocity as a Function of Angular Displacement**:
   $$ \omega^2 = \omega_0^2 + 2\alpha (\theta - \theta_0) $$

Where:
- $ \omega_0 $ is the initial angular velocity.
- $ \theta_0 $ is the initial angular displacement.
- $ \alpha $ is the constant angular acceleration.
- $ t $ is the time.

### Example

A wheel starts from rest and accelerates uniformly to an angular velocity of 30 rad/s in 10 seconds. Calculate the angular acceleration and the total angular displacement.

1. **Angular Acceleration**:
   $$ \omega = \omega_0 + \alpha t $$
   $$ 30 \text{ rad/s} = 0 + \alpha \times 10 \text{ s} $$
   $$ \alpha = 3 \text{ rad/s}^2 $$

2. **Angular Displacement**:
   $$ \theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2 $$
   $$ \theta = 0 + 0 \times 10 + \frac{1}{2} \times 3 \text{ rad/s}^2 \times (10 \text{ s})^2 $$
   $$ \theta = 150 \text{ radians} $$


These equations are essential for solving problems involving rotational motion with constant angular acceleration. For example, if a merry-go-round starts from rest and accelerates at 0.5 rad/s² for 8 seconds, the final angular velocity and total angular displacement can be calculated as follows:

1. **Final Angular Velocity**:
   $$ \omega = \omega_0 + \alpha t $$
   $$ \omega = 0 + 0.5 \text{ rad/s}^2 \times 8 \text{ s} = 4 \text{ rad/s} $$

2. **Total Angular Displacement**:
   $$ \theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2 $$
   $$ \theta = 0 + 0 \times 8 + \frac{1}{2} \times 0.5 \text{ rad/s}^2 \times (8 \text{ s})^2 $$
   $$ \theta = 16 \text{ radians} $$

---
## Questions and Answers

### Q1: What is angular displacement?

**A1:** Angular displacement is the angle through which an object rotates about a fixed axis. It is usually measured in radians, degrees, or revolutions.

### Q2: How do you convert degrees to radians?

**A2:** To convert degrees to radians, multiply the degree measure by $ \frac{\pi}{180} $.

$$ \text{Radians} = \text{Degrees} \times \left( \frac{\pi}{180} \right) $$

### Q3: What is angular velocity?

**A3:** Angular velocity is the rate at which an object rotates about an axis. It is defined as the change in angular displacement per unit time.

### Q4: How do you calculate average angular velocity?

**A4:** Average angular velocity is calculated by dividing the change in angular displacement by the change in time.

$$ \omega_{\text{avg}} = \frac{\Delta \theta}{\Delta t} $$

### Q5: What is angular acceleration?

**A5:** Angular acceleration is the rate at which the angular velocity of an object changes with time. It is defined as the change in angular velocity per unit time.

### Q6: How do you calculate average angular acceleration?

**A6:** Average angular acceleration is calculated by dividing the change in angular velocity by the change in time.

$$ \alpha_{\text{avg}} = \frac{\Delta \omega}{\Delta t} $$

### Q7: What is the relationship between linear velocity and angular velocity?

**A7:** The linear velocity ($ v $) of a point on a rotating object is related to the angular velocity ($ \omega $) by the radius ($ r $) of the circular path.

$$ v = r\omega $$

### Q8: What are the rotational kinematic equations?

**A8:** The rotational kinematic equations describe the motion of an object undergoing constant angular acceleration. They are:

1. $ \omega = \omega_0 + \alpha t $
2. $ \theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2 $
3. $ \omega^2 = \omega_0^2 + 2\alpha (\theta - \theta_0) $

### Q9: How do you calculate the angular displacement of an object with constant angular acceleration?

**A9:** The angular displacement ($ \theta $) of an object with constant angular acceleration can be calculated using the equation:

$$ \theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2 $$

Where:
- $ \theta_0 $ is the initial angular displacement.
- $ \omega_0 $ is the initial angular velocity.
- $ \alpha $ is the constant angular acceleration.
- $ t $ is the time.

### Q10: What is the difference between angular velocity and angular acceleration?

**A10:** Angular velocity ($ \omega $) is the rate of change of angular displacement, while angular acceleration ($ \alpha $) is the rate of change of angular velocity. Angular velocity describes how fast an object is rotating, while angular acceleration describes how quickly the rotation speed is changing.

## Conclusion

Angular kinematics is a fundamental aspect of rotational motion, providing the tools to describe the motion of rotating objects. By understanding concepts such as angular displacement, angular velocity, and angular acceleration, we can analyze and predict the behavior of objects in rotational motion. The relationship between angular and linear quantities further extends the applicability of these concepts to real-world scenarios, such as the motion of wheels, gears, and celestial bodies.
