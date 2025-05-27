### Introduction
Dynamics of rotational motion deals with the causes of rotational motion, specifically the torques that produce angular acceleration. Just as forces cause linear acceleration, torques cause angular acceleration. This section explores the relationship between torque, moment of inertia, and angular acceleration, as well as the concept of rotational kinetic energy and the work-energy theorem in rotational motion.

![Torque and its effects](/images/classical-mechanics/rotational-motion/torque.svg)

### Key Concepts

1. **Torque ($\tau$)**: The rotational equivalent of force, causing angular acceleration.
2. **Moment of Inertia ($I$)**: A measure of an object's resistance to changes in its rotational motion.
3. **Angular Acceleration ($\alpha$)**: The rate of change of angular velocity.
4. **Rotational Kinetic Energy**: The kinetic energy due to an object's rotation.
5. **Work and Power in Rotational Motion**: The work done by a torque and the power associated with rotational motion.

## Torque and Angular Acceleration

### Torque

Torque is the rotational equivalent of force and is defined as the product of the force applied and the lever arm (the perpendicular distance from the axis of rotation to the line of action of the force).

$$\tau = rF\sin\theta$$

Where:
- $\tau$ is the torque.
- $r$ is the distance from the axis of rotation to the point where the force is applied.
- $F$ is the magnitude of the force.
- $\theta$ is the angle between the force vector and the lever arm.

![Linear and Angular Relations](/images/classical-mechanics/rotational-motion/linear-angular-relations.svg)

### Newton's Second Law for Rotation

Newton's second law for rotation states that the net torque acting on an object is equal to the product of its moment of inertia and its angular acceleration.

$$\sum \tau = I\alpha$$

Where:
- $\sum \tau$ is the net torque.
- $I$ is the moment of inertia.
- $\alpha$ is the angular acceleration.

### Example

A force of 10 N is applied tangentially to the edge of a wheel with a radius of 0.5 meters. If the wheel has a moment of inertia of 2 kg⋅m², calculate the angular acceleration.

1. **Calculate the Torque**:
   $$ \tau = rF = 0.5 \text{ m} \times 10 \text{ N} = 5 \text{ N}\cdot\text{m} $$

2. **Calculate the Angular Acceleration**:
   $$ \alpha = \frac{\tau}{I} = \frac{5 \text{ N}\cdot\text{m}}{2 \text{ kg}\cdot\text{m}^2} = 2.5 \text{ rad/s}^2 $$



Torque is a vector quantity, with its direction given by the right-hand rule. If you curl the fingers of your right hand in the direction of the force, your thumb points in the direction of the torque vector.

For example, if you apply a force to a wrench to tighten a bolt, the torque you generate depends on both the magnitude of the force and the length of the wrench. A longer wrench (greater $r$) or a greater force will produce a larger torque, making it easier to turn the bolt.

## Moment of Inertia

The moment of inertia ($I$) is a measure of an object's resistance to changes in its rotational motion. It depends on the mass distribution relative to the axis of rotation.

![Moment of Inertia](/images/classical-mechanics/rotational-motion/moment-of-inertia.svg)

### Moment of Inertia for Common Shapes

- **Point Mass**: $I = mr^2$
- **Solid Sphere**: $I = \frac{2}{5}mr^2$
- **Hollow Sphere**: $I = \frac{2}{3}mr^2$
- **Solid Cylinder**: $I = \frac{1}{2}mr^2$
- **Hollow Cylinder**: $I = mr^2$

### Parallel Axis Theorem

The parallel axis theorem allows us to calculate the moment of inertia about any axis parallel to an axis through the center of mass.

$$I = I_{\text{cm}} + md^2$$

Where:
- $I_{\text{cm}}$ is the moment of inertia about the center of mass.
- $m$ is the mass of the object.
- $d$ is the distance between the two axes.

### Example

A solid cylinder has a mass of 5 kg and a radius of 0.2 m. Calculate its moment of inertia about its central axis.

$$ I = \frac{1}{2}mr^2 = \frac{1}{2} \times 5 \text{ kg} \times (0.2 \text{ m})^2 = 0.1 \text{ kg}\cdot\text{m}^2 $$



The moment of inertia is analogous to mass in linear motion. Just as mass measures an object's resistance to linear acceleration, the moment of inertia measures an object's resistance to angular acceleration.

For example, a figure skater spinning with arms extended has a larger moment of inertia than when the arms are pulled in close to the body. When the skater pulls their arms in, the moment of inertia decreases, causing the angular velocity to increase to conserve angular momentum.

![Angular Momentum Conservation](/images/classical-mechanics/rotational-motion/angular-momentum.svg)

## Rotational Kinetic Energy

Rotational kinetic energy is the kinetic energy associated with the rotation of an object. It is given by:

$$ K_{\text{rot}} = \frac{1}{2}I\omega^2 $$

Where:
- $I$ is the moment of inertia
- $\omega$ is the angular velocity

### Example

A flywheel with a moment of inertia of 0.5 kg⋅m² is rotating at an angular velocity of 10 rad/s. Calculate its rotational kinetic energy.

$$ K_{\text{rot}} = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 0.5 \text{ kg}\cdot\text{m}^2 \times (10 \text{ rad/s})^2 = 25 \text{ J} $$



Rotational kinetic energy is part of the total kinetic energy of a rotating object. For example, a rolling object has both translational kinetic energy ($\frac{1}{2}mv^2$) and rotational kinetic energy ($\frac{1}{2}I\omega^2$).

Consider a rolling ball: as it moves down a hill, its potential energy is converted into both translational and rotational kinetic energy. The distribution of energy between these two forms depends on the object's moment of inertia.

## Work and Power in Rotational Motion

In rotational motion, work is done when a torque causes an object to rotate through an angular displacement. The relationship between work, torque, and angular displacement is fundamental to understanding rotational dynamics.

The work done by a torque (τ) rotating an object through an angular displacement (θ) is:

$$ W = \tau\theta $$

This equation shows that work in rotational motion depends on both the magnitude of the torque and the angular displacement through which it acts. For example, a torque of 5 N⋅m rotating an object through π radians does 15.7 J of work.

Power in rotational motion represents the rate at which work is done. It is given by:

$$ P = \tau\omega $$

where ω is the angular velocity. This equation parallels the linear motion relationship P = Fv, highlighting the connection between linear and rotational dynamics.

Example:
A motor exerts a torque of 10 N⋅m on a wheel, causing it to rotate at an angular velocity of 5 rad/s. Calculate the power delivered by the motor.

$$ P = \tau\omega = 10 \text{ N}\cdot\text{m} \times 5 \text{ rad/s} = 50 \text{ W} $$

This means the motor delivers 50 joules of energy per second to maintain the wheel's rotation.

## Questions and Answers

Q1. A solid disk of mass 2 kg and radius 0.3 m is initially at rest. A constant torque of 6 N⋅m is applied to the disk. Calculate the angular acceleration of the disk.

Solution:
1. Identify the relevant equation: $\tau = I\alpha$
2. Calculate the moment of inertia: $I = \frac{1}{2}mr^2 = \frac{1}{2}(2\text{ kg})(0.3\text{ m})^2 = 0.09\text{ kg}\cdot\text{m}^2$
3. Solve for angular acceleration: $\alpha = \frac{\tau}{I} = \frac{6\text{ N}\cdot\text{m}}{0.09\text{ kg}\cdot\text{m}^2} = 66.67\text{ rad/s}^2$

Q2. A flywheel rotating at 120 rpm needs to be brought to rest. If a constant torque of -2.5 N⋅m is applied and the flywheel has a moment of inertia of 0.4 kg⋅m², how long will it take to stop?

Solution:
1. Convert rpm to rad/s: $\omega_0 = 120\text{ rpm} \times \frac{2\pi}{60} = 12.57\text{ rad/s}$
2. Use $\tau = I\alpha$ to find acceleration: $\alpha = \frac{-2.5\text{ N}\cdot\text{m}}{0.4\text{ kg}\cdot\text{m}^2} = -6.25\text{ rad/s}^2$
3. Use $\omega = \omega_0 + \alpha t$ with $\omega = 0$: $t = -\frac{\omega_0}{\alpha} = -\frac{12.57\text{ rad/s}}{-6.25\text{ rad/s}^2} = 2.01\text{ s}$

Q3. A motor delivers 3 kW of power while rotating at 300 rad/s. What torque does the motor produce?

Solution:
1. Use the power equation: $P = \tau\omega$
2. Solve for torque: $\tau = \frac{P}{\omega} = \frac{3000\text{ W}}{300\text{ rad/s}} = 10\text{ N}\cdot\text{m}$

Q4. A figure skater spinning at 6 rad/s pulls their arms in, reducing their moment of inertia from 1.2 kg⋅m² to 0.8 kg⋅m². What is their new angular velocity?

Solution:
1. Use conservation of angular momentum: $L = I_1\omega_1 = I_2\omega_2$
2. Solve for final angular velocity: $\omega_2 = \frac{I_1\omega_1}{I_2} = \frac{(1.2\text{ kg}\cdot\text{m}^2)(6\text{ rad/s})}{0.8\text{ kg}\cdot\text{m}^2} = 9\text{ rad/s}$

Q5. A solid cylinder of mass 5 kg and radius 0.2 m rolls without slipping down a 30° inclined plane. Calculate its angular acceleration.

Solution:
1. For rolling without slipping: $a = \alpha r$
2. Down an incline: $a = g\sin\theta = (9.81\text{ m/s}^2)\sin(30°) = 4.905\text{ m/s}^2$
3. Calculate angular acceleration: $\alpha = \frac{a}{r} = \frac{4.905\text{ m/s}^2}{0.2\text{ m}} = 24.525\text{ rad/s}^2$

Q6. A 2 kg disk with radius 0.15 m rotates at 10 rad/s. How much work is needed to double its angular velocity?

Solution:
1. Initial rotational kinetic energy: $K_1 = \frac{1}{2}I\omega_1^2$
2. Calculate moment of inertia: $I = \frac{1}{2}mr^2 = \frac{1}{2}(2\text{ kg})(0.15\text{ m})^2 = 0.0225\text{ kg}\cdot\text{m}^2$
3. Work equals change in kinetic energy:
   $W = \frac{1}{2}I\omega_2^2 - \frac{1}{2}I\omega_1^2$
   $W = \frac{1}{2}(0.0225)(20^2 - 10^2)$
   $W = 3.375\text{ J}$

## Conclusion

Dynamics of rotational motion is a crucial aspect of understanding how objects rotate under the influence of torques. By exploring concepts such as torque, moment of inertia, angular acceleration, and rotational kinetic energy, we can analyze and predict the behavior of rotating objects. The relationship between torque and angular acceleration, as well as the work and power in rotational motion, provides a comprehensive framework for solving problems in rotational dynamics.
