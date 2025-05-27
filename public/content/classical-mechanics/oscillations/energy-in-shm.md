

### INTRODUCTION TO ENERGY IN SHM

In Simple Harmonic Motion (SHM), the total mechanical energy of the system is conserved. This energy is shared between **kinetic energy** (associated with motion) and **potential energy** (associated with displacement). Below, we explore the energy components, their relationships, and their behavior in SHM.

![Energy Distribution in SHM](/images/classical-mechanics/oscillations/shm-energy-new.svg)
*This graph illustrates the relationship between kinetic energy, potential energy, and total mechanical energy in a simple harmonic oscillator over time.*

---

### **Potential Energy in SHM**

The potential energy ($U$) in simple harmonic motion arises due to the displacement of the object from its equilibrium position. For a spring-mass system, the potential energy is mathematically represented as:

$$
U = \frac{1}{2} k x^2
$$

In this equation, $k$ represents the spring constant, and $x$ denotes the displacement from the equilibrium position. The potential energy is a measure of the stored energy in the system due to its position.

### Key Points:

- The potential energy is maximum at the extremes of the motion, where the displacement is equal to the amplitude ($x = \pm A$). At this point, all the energy in the system is stored as potential energy, and the object momentarily comes to rest before reversing direction.

- Conversely, the potential energy is zero at the equilibrium position ($x = 0$), where the object has no displacement from its resting state. Here, the energy is entirely kinetic.

- The potential energy varies quadratically with displacement, indicating that even small changes in displacement can lead to significant changes in potential energy. This quadratic relationship is a fundamental characteristic of SHM and is crucial for understanding the behavior of oscillatory systems.

### **Kinetic Energy in SHM**

The kinetic energy ($K$) in SHM is associated with the motion of the object and is given by:

$$
K = \frac{1}{2} m v^2
$$

where $m$ is the mass of the object and $v$ is its velocity. Kinetic energy represents the energy of motion and varies throughout the oscillation.

### Key Points:

- The kinetic energy is maximum at the equilibrium position ($x = 0$), where the velocity is at its peak. At this point, all the energy in the system is kinetic, and the object is moving fastest.

- At the extremes of the motion ($x = \pm A$), the kinetic energy is zero because the velocity is momentarily zero as the object changes direction.

- The kinetic energy varies with the square of the velocity, meaning that as the speed of the object increases, the kinetic energy increases rapidly. This relationship is essential for understanding how energy is transferred between kinetic and potential forms during oscillation.

### **Total Mechanical Energy in SHM**

The total mechanical energy ($E$) in SHM is the sum of the potential energy and kinetic energy:

$$
E = U + K
$$

Since energy is conserved in SHM, the total mechanical energy remains constant throughout the motion. It can be expressed as:

$$
E = \frac{1}{2} k A^2
$$

where $A$ is the amplitude of the motion. This equation shows that the total energy depends only on the amplitude and the spring constant, indicating that the energy of the system is determined by its maximum displacement.

### Key Points:

- The total energy remains constant, demonstrating the principle of conservation of energy in SHM. At any point in the motion, the sum of potential energy and kinetic energy equals the total energy:

$$
E = \frac{1}{2} k x^2 + \frac{1}{2} m v^2 = \frac{1}{2} k A^2
$$

- This relationship emphasizes that energy continuously transforms between kinetic and potential forms as the object oscillates, while the total mechanical energy remains unchanged. Understanding this energy exchange is fundamental in analyzing oscillatory systems and their applications in various fields, from engineering to natural phenomena.

### **Relationship Between Energy and Amplitude**

The total mechanical energy in simple harmonic motion (SHM) is directly proportional to the square of the amplitude of oscillation. This relationship is mathematically represented as:

$$
E = \frac{1}{2} k A^2
$$

In this equation, $E$ represents the total mechanical energy, $k$ is the spring constant, and $A$ is the amplitude of the motion. The significance of this relationship lies in its implications for how energy behaves in oscillatory systems.

When the amplitude is doubled, the total mechanical energy increases by a factor of four. This is because the energy is proportional to the square of the amplitude. For example, if the amplitude increases from $A$ to $2A$, the new energy becomes:

$$
E' = \frac{1}{2} k (2A)^2 = \frac{1}{2} k (4A^2) = 4E
$$

Conversely, if the amplitude is halved, the total mechanical energy decreases by a factor of four. For instance, reducing the amplitude from $A$ to $\frac{A}{2}$ results in:

$$
E'' = \frac{1}{2} k \left(\frac{A}{2}\right)^2 = \frac{1}{2} k \left(\frac{A^2}{4}\right) = \frac{1}{4} E
$$

This quadratic relationship between energy and amplitude highlights the sensitivity of mechanical energy in oscillatory systems to changes in amplitude. Understanding this relationship is crucial in various applications, such as designing springs, pendulums, and other systems that exhibit SHM. By manipulating the amplitude, engineers and physicists can control the energy dynamics of these systems, optimizing performance and efficiency in practical applications.

In summary, the relationship between energy and amplitude in SHM is fundamental to understanding how oscillatory systems operate. The direct proportionality to the square of the amplitude underscores the importance of amplitude in determining the energy of the system, influencing both theoretical analyses and practical implementations in various fields of science and engineering.

### **Energy as a Function of Time**

In simple harmonic motion (SHM), both potential energy ($U$) and kinetic energy ($K$) vary with time as the object oscillates. These variations can be expressed using the displacement and velocity equations derived from SHM principles.

The displacement of the object as a function of time is given by:

$$
x(t) = A \cos(\omega t + \phi)
$$

where $A$ is the amplitude, $\omega$ is the angular frequency, and $\phi$ is the phase constant. The velocity of the object is derived from the displacement equation:

$$
v(t) = -A \omega \sin(\omega t + \phi)
$$

### Potential Energy in SHM

The potential energy as a function of time can be expressed as:

$$
U(t) = \frac{1}{2} k x^2 = \frac{1}{2} k A^2 \cos^2(\omega t + \phi)
$$

In this equation, $k$ is the spring constant. The potential energy oscillates between maximum and minimum values as the object moves through its cycle. At the extremes of motion (where $x = \pm A$), the potential energy reaches its maximum, while at the equilibrium position (where $x = 0$), the potential energy is zero.

### Kinetic Energy in SHM

Similarly, the kinetic energy as a function of time is given by:

$$
K(t) = \frac{1}{2} m v^2 = \frac{1}{2} m \omega^2 A^2 \sin^2(\omega t + \phi)
$$

Here, $m$ represents the mass of the object. The kinetic energy is maximum at the equilibrium position, where the velocity is greatest, and it is zero at the extremes of motion, where the velocity is momentarily zero. This oscillation between kinetic and potential energy is a hallmark of SHM.

### Energy Conservation in SHM

Since $\omega^2 = \frac{k}{m}$, the kinetic energy can also be expressed as:

$$
K(t) = \frac{1}{2} k A^2 \sin^2(\omega t + \phi)
$$

This expression emphasizes that both potential and kinetic energy oscillate with time, but their sum remains constant throughout the motion. The total mechanical energy in SHM is conserved, meaning that at any point in the oscillation, the sum of potential energy and kinetic energy equals the total mechanical energy:

$$
E = U + K = \frac{1}{2} k A^2
$$

### Key Observations

- The potential energy and kinetic energy oscillate with time, but their sum remains constant, demonstrating the conservation of energy.
- When potential energy is at its maximum, kinetic energy is zero, and vice versa. This exchange of energy is what allows the system to oscillate.
- The energy oscillates between potential and kinetic forms at twice the frequency of the SHM, illustrating the dynamic nature of energy in oscillatory systems.

### **Energy Distribution in SHM**

In simple harmonic motion (SHM), the distribution of energy between potential energy ($U$) and kinetic energy ($K$) varies as the object oscillates. This variation occurs at different positions throughout the motion, and understanding this distribution is key to grasping the dynamics of SHM.

### At the Extremes of Motion ($x = \pm A$)

When the object is at its maximum displacement, which occurs at the extremes of its motion, the following characteristics are observed:

- The displacement is at its maximum value ($x = \pm A$), indicating that the object is farthest from its equilibrium position.
- The velocity of the object is zero, as it momentarily comes to rest before reversing direction.
- At this point, the potential energy reaches its maximum value:

$$
U = \frac{1}{2} k A^2
$$

- Conversely, the kinetic energy is zero:

$$
K = 0
$$

This means that all the energy in the system is stored as potential energy when the object is at its maximum displacement.

### At the Equilibrium Position ($x = 0$)

As the object moves to the equilibrium position, the characteristics change significantly:

- The displacement is zero ($x = 0$), meaning the object is at its resting position.
- The velocity is at its maximum, as the object is moving fastest at this point.
- The potential energy is zero:

$$
U = 0
$$

- In contrast, the kinetic energy is at its maximum:

$$
K = \frac{1}{2} k A^2
$$

At the equilibrium position, all the energy in the system is kinetic, reflecting the object's maximum speed.

### At Any Other Point

At positions between the extremes and the equilibrium, both potential and kinetic energy are non-zero. The energy distribution at these points can be expressed as:

$$
E = U + K = \frac{1}{2} k A^2
$$

This equation indicates that the total mechanical energy remains constant throughout the motion, regardless of the individual values of potential and kinetic energy at any point. As the object oscillates, energy continuously transforms between potential and kinetic forms, illustrating the dynamic nature of SHM.

In summary, the energy distribution in SHM is characterized by maximum potential energy at the extremes of motion and maximum kinetic energy at the equilibrium position. This interplay between potential and kinetic energy is fundamental to understanding the behavior of oscillatory systems and their applications in various fields, including engineering and physics.

### **Graphical Representation of Energy in SHM**

The energy distribution in simple harmonic motion (SHM) can be effectively visualized using graphs that illustrate how displacement, potential energy, kinetic energy, and total energy change over time. Each of these graphs provides valuable insights into the dynamics of oscillatory motion.

### **Displacement vs. Time**

The graph of displacement $x(t)$ oscillates sinusoidally between the maximum amplitude $A$ and the minimum amplitude $-A$. This sinusoidal pattern reflects the periodic nature of SHM, where the object moves back and forth around the equilibrium position. At the extremes of the motion, the displacement reaches its maximum and minimum values, indicating the points where the object momentarily stops before reversing direction.

### Potential Energy vs. Time

The potential energy $U(t)$ can be represented as a squared cosine function, oscillating between its maximum value at the extremes of motion and zero at the equilibrium position. The relationship can be expressed as:

$$
U(t) = \frac{1}{2} k A^2 \cos^2(\omega t + \phi)
$$

This graph shows that potential energy is highest when the displacement is maximum and lowest when the object is at the equilibrium position. The quadratic nature of the cosine function emphasizes how potential energy increases rapidly as the object moves away from equilibrium.

### Kinetic Energy vs. Time

In contrast, the kinetic energy $K(t)$ oscillates as a squared sine function, represented mathematically as:

$$
K(t) = \frac{1}{2} m \omega^2 A^2 \sin^2(\omega t + \phi)
$$

This graph indicates that kinetic energy is zero at the extremes of motion (where the velocity is zero) and reaches its maximum at the equilibrium position (where the velocity is greatest). The sine function's characteristics highlight the dynamic exchange between kinetic and potential energy as the object oscillates.

### Total Energy

The total mechanical energy $E$ in SHM remains constant over time, represented as:

$$
E = \frac{1}{2} k A^2
$$

This constant value is depicted as a horizontal line across the graphs of potential and kinetic energy, illustrating the principle of conservation of energy. As the object oscillates, energy continuously transforms between kinetic and potential forms, but the total energy remains unchanged throughout the motion.

In summary, the graphical representation of energy in SHM provides a clear understanding of how energy is distributed and transformed during oscillation. These visualizations are essential for analyzing the behavior of oscillatory systems and have practical applications in various fields, including engineering, physics, and even in the design of musical instruments. By interpreting these graphs, one can gain deeper insights into the dynamics of SHM and the underlying principles governing oscillatory motion.

### **Example Problems**

### Example 1:
A mass of $0.2 \, \text{kg}$ is attached to a spring with a force constant of $50 \, \text{N/m}$. The system oscillates with an amplitude of $0.1 \, \text{m}$. Calculate:
1. The total mechanical energy of the system.
2. The potential energy and kinetic energy when the displacement is $0.05 \, \text{m}$.

**Solution:**

1. **Total Mechanical Energy**:
   $$
   E = \frac{1}{2}kA^2 = \frac{1}{2} \times 50 \times (0.1)^2 = 0.25 \, \text{J}
   $$

2. **Potential Energy at $x = 0.05 \, \text{m}$**:
   $$
   U = \frac{1}{2}kx^2 = \frac{1}{2} \times 50 \times (0.05)^2 = 0.0625 \, \text{J}
   $$

3. **Kinetic Energy at $x = 0.05 \, \text{m}$**:
   $$
   K = E - U = 0.25 - 0.0625 = 0.1875 \, \text{J}
   $$

### **Applications of Energy in SHM**

1. **Spring-Mass Systems**:
   - Used in mechanical systems like car suspensions and shock absorbers.
   - The energy oscillates between potential energy (spring compression/extension) and kinetic energy (mass motion).

2. **Pendulums**:
   - In a simple pendulum, the energy oscillates between gravitational potential energy and kinetic energy.

3. **Molecular Vibrations**:
   - Atoms in molecules vibrate in SHM, and energy is exchanged between potential and kinetic forms.



### Practice Problems

### Problem 1: Spring-Mass System Energy
A mass of 0.5 kg is attached to a spring with spring constant k = 200 N/m. If the mass is pulled 10 cm from its equilibrium position and released from rest:

a) What is the total mechanical energy of the system?
b) What is the maximum velocity of the mass?
c) What is the velocity when the displacement is 5 cm?

**Solution:**

a) Total mechanical energy (E):
$$
E = \frac{1}{2}kA^2 = \frac{1}{2}(200\text{ N/m})(0.1\text{ m})^2 = 1\text{ J}
$$

b) Maximum velocity (at x = 0):
At equilibrium position, all energy is kinetic:
$$
\frac{1}{2}mv_{max}^2 = E
$$
$$
v_{max} = \sqrt{\frac{2E}{m}} = \sqrt{\frac{2(1\text{ J})}{0.5\text{ kg}}} = 2\text{ m/s}
$$

c) Velocity at x = 0.05 m:
Using energy conservation:
$$
E = \frac{1}{2}kx^2 + \frac{1}{2}mv^2 = 1\text{ J}
$$
$$
\frac{1}{2}(200)(0.05)^2 + \frac{1}{2}(0.5)v^2 = 1
$$
$$
0.25 + 0.25v^2 = 1
$$
$$
v = \sqrt{3} \approx 1.73\text{ m/s}
$$

### Problem 2: Energy Conservation in Pendulum
A simple pendulum of length 1 m is released from rest at an angle of 30° from the vertical:

a) What is the maximum speed of the bob?
b) What is its speed when the angle is 15°?
c) What fraction of the total energy is kinetic energy at 15°?

**Solution:**

a) Maximum speed (at lowest point):
Initial height h = L(1 - cos θ) = 1(1 - cos 30°) = 0.134 m
Using conservation of energy:
$$
mgh = \frac{1}{2}mv_{max}^2
$$
$$
v_{max} = \sqrt{2gh} = \sqrt{2(9.81)(0.134)} = 1.62\text{ m/s}
$$

b) Speed at 15°:
Height at 15° = L(1 - cos 15°) = 0.034 m
Change in height = 0.134 - 0.034 = 0.1 m
Using conservation of energy:
$$
mgh_1 = mgh_2 + \frac{1}{2}mv^2
$$
$$
9.81(0.134) = 9.81(0.034) + \frac{1}{2}v^2
$$
$$
v = \sqrt{2(9.81)(0.1)} = 1.40\text{ m/s}
$$

c) At 15°:
Total energy = mgh₁ = 9.81(0.134) = 1.31 J
Kinetic energy = ½mv² = ½(1)(1.40)² = 0.98 J
Fraction = 0.98/1.31 = 0.75 or 75%

### Problem 3: Energy in Combined Systems
A 2 kg mass is attached to two identical springs in parallel, each with spring constant 100 N/m. The mass is displaced 15 cm from equilibrium and released:

a) What is the effective spring constant?
b) What is the total energy of the system?
c) What is the maximum kinetic energy?

**Solution:**

a) For springs in parallel:
$$
k_{eff} = k_1 + k_2 = 100 + 100 = 200\text{ N/m}
$$

b) Total energy:
$$
E = \frac{1}{2}k_{eff}A^2 = \frac{1}{2}(200)(0.15)^2 = 2.25\text{ J}
$$

c) Maximum kinetic energy:
At the equilibrium position, all energy is kinetic:
$$
KE_{max} = E = 2.25\text{ J}
$$

### Problem 4: Energy Distribution
A mass-spring system has a total energy of 8 J. At an instant when the displacement is 0.2 m:

a) What is the potential energy?
b) What is the kinetic energy?
c) What is the spring constant if the mass is 0.5 kg?

**Solution:**

a) Potential energy at x = 0.2 m:
$$
U = \frac{1}{2}kx^2
$$
To find k, use total energy:
$$
8 = \frac{1}{2}kA^2
$$
At maximum displacement (A), U = E = 8 J
Therefore:
$$
k = \frac{2(8)}{A^2}
$$
Since x = 0.2 m is an instantaneous position, A must be larger.
Let's find k using the maximum velocity:
$$
v_{max} = \sqrt{\frac{2E}{m}} = \sqrt{\frac{2(8)}{0.5}} = 5.66\text{ m/s}
$$
$$
k = \frac{mv_{max}^2}{A^2} = \frac{0.5(5.66)^2}{0.2^2} = 400\text{ N/m}
$$

Now we can find U:
$$
U = \frac{1}{2}(400)(0.2)^2 = 8\text{ J}
$$

b) Kinetic energy:
$$
K = E - U = 8 - 8 = 0\text{ J}
$$
This tells us that x = 0.2 m must be the amplitude position!

c) Spring constant was found to be 400 N/m



###  **Key Takeaways**

- In SHM, the total mechanical energy is conserved and is proportional to the square of the amplitude.
- The potential energy is maximum at the extremes of the motion, while the kinetic energy is maximum at the equilibrium position.
- The total energy depends only on the amplitude and the force constant.

---
