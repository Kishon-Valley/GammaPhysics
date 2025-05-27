### INTRODUCTION
Work is a fundamental concept in physics that describes the transfer of energy when a force is applied to an object, causing it to move. Understanding work is essential for analyzing energy transformations and the behavior of physical systems.

---

## Definition of Work
Work is done when a force is applied to an object, and the object moves in the direction of the force. Mathematically, work is defined as:
$$
W = F \cdot d \cdot \cos(\theta)
$$
where:
- $W$ = work done (in Joules, J)
- $F$ = magnitude of the force applied (in Newtons, N)
- $d$ = displacement of the object (in meters, m)
- $\theta$ = angle between the force and displacement



![Work Definition](/images/physics/work-energy/work-definition.svg)
*The definition of work involves force (F), displacement (d), and the angle (θ) between them*


---

## Key Principles of Work

### 1. **Positive Work**
Work is **positive** when the force and displacement are in the **same direction** ($\theta = 0^\circ$). This means energy is transferred **to** the object.

**Example**: Pushing a box across the floor.

### 2. **Negative Work**
Work is **negative** when the force and displacement are in **opposite directions** ($\theta = 180^\circ$). This means energy is transferred **from** the object.

**Example**: Friction slowing down a moving object.

### 3. **Zero Work**
Work is **zero** when the force is **perpendicular** to the displacement ($\theta = 90^\circ$). No energy is transferred.

**Example**: Carrying a box horizontally without lifting or lowering it.



![Types of Work](/images/physics/work-energy/types-of-work.svg)
*Different scenarios showing positive work (top), negative work (middle), and zero work (bottom)*


---

## Units of Work
The SI unit of work is the **Joule (J)**, where:
$$
1 \text{ J} = 1 \text{ N} \cdot \text{m}
$$

---

## Work Done by Variable Forces
For variable forces (where the force changes with position), work is calculated by integrating the force over the displacement:
$$
W = \int_{x_1}^{x_2} F(x) \, dx
$$



![Variable Forces](/images/physics/work-energy/variable-forces.svg)
*Work done by a variable force is equal to the area under the force-displacement curve*


---

## Work-Energy Theorem
The work done on an object is equal to the change in its **kinetic energy**:
$$
W = \Delta KE = \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2
$$
where:
- \( m \) = mass of the object (in kg)
- \( v_f \) = final velocity (in m/s)
- \( v_i \) = initial velocity (in m/s)



![Work-Energy Theorem](/images/physics/work-energy/work-energy-theorem.svg)
*The work-energy theorem relates the net work done on an object to its change in kinetic energy*


---

## Real-World Examples of Work

1. **Lifting an Object**: When you lift a box, you apply an upward force, and the box moves upward. Work is done on the box, and energy is transferred to it.

2. **Pushing a Car**: When you push a car, you apply a horizontal force, and the car moves forward. Work is done on the car, and energy is transferred to it.

3. **Braking a Bicycle**: When you apply the brakes on a bicycle, the frictional force opposes the motion, and the bicycle slows down. Work is done by the brakes, and energy is transferred from the bicycle.

4. **Climbing Stairs**: When you climb stairs, you apply an upward force, and you move upward. Work is done on your body, and energy is transferred to it.

---

## Common Misconceptions About Work

1. **Work Requires Motion**: Work is only done when an object moves. If you push against a wall and it doesn't move, no work is done on the wall.

2. **Work is Always Positive**: Work can be positive, negative, or zero, depending on the angle between the force and the displacement.

3. **Force and Displacement Must Be in the Same Direction**: Work is maximized when the force and displacement are in the same direction, but work can still be done if they are at an angle.

4. **Work is the Same as Energy**: Work is a way to transfer energy, but it is not the same as energy. Energy is a property of a system, while work is a process of energy transfer.

---

## Equations of Work

1. **Work Done by a Constant Force**:
   $$
   W = F \cdot d \cdot \cos(\theta)
   $$

2. **Work Done by a Variable Force**:
   $$
   W = \int_{x_1}^{x_2} F(x) \, dx
   $$

3. **Work-Energy Theorem**:
   $$
   W = \Delta KE = \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2
   $$

---
### 💡 Words of Wisdom

> **"The best way to learn is to do; the worst way to teach is to talk."**
>
> *— Paul Halmos*

---

## Practice Problems

### Problem 1: Work Calculation
A force of 30 N is applied to push a box 10 meters across a horizontal floor. If the force is applied at an angle of 25° to the horizontal, how much work is done?

**Solution**:
$$
W = F \cdot d \cdot \cos(\theta) = 30 \text{ N} \times 10 \text{ m} \times \cos(25^\circ) \approx 272 \text{ J}
$$

---

### Problem 2: Work Done by Gravity

**Problem 2.1**: A 10 kg object is lifted vertically to a height of 5 meters. How much work is done by gravity? (Assume $g = 9.81 \text{ m/s}^2$)

**Solution**:
Work done by gravity:
$$
W = F \cdot d \cdot \cos(\theta) = m g h \cdot \cos(180^\circ) = 10 \text{ kg} \times 9.81 \text{ m/s}^2 \times 5 \text{ m} \times (-1) = -490.5 \text{ J}
$$
(The negative sign indicates that gravity opposes the motion.)

**Problem 2.2**: A skier of mass 70 kg descends a slope that drops vertically by 100 meters. Calculate the work done by gravity on the skier.

**Solution**:
Work done by gravity:
$$
W = mgh\cos(0°) = 70 \text{ kg} \times 9.81 \text{ m/s}^2 \times 100 \text{ m} \times 1 = 68,670 \text{ J}
$$
(Positive because gravity assists the motion downward)

**Problem 2.3**: A roller coaster car of mass 500 kg first rises 30 meters and then drops 45 meters. Calculate the total work done by gravity for the complete motion.

**Solution**:
Work during rise (against gravity):
$$W_1 = mgh_1\cos(180°) = -500 \times 9.81 \times 30 = -147,150 \text{ J}$$
Work during fall (with gravity):
$$W_2 = mgh_2\cos(0°) = 500 \times 9.81 \times 45 = 220,725 \text{ J}$$
Total work:
$$W_{total} = W_1 + W_2 = 73,575 \text{ J}$$

### Problem 3: Work-Energy Theorem

**Problem 3.1**: A 3 kg object is moving at 5 m/s. If a force does 50 J of work on the object, what is its final velocity?

**Solution**:
Using the work-energy theorem:
$$
W = \Delta KE = \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2
$$
$$
50 \text{ J} = \frac{1}{2} \times 3 \text{ kg} \times v_f^2 - \frac{1}{2} \times 3 \text{ kg} \times (5 \text{ m/s})^2
$$
$$
v_f = \sqrt{\frac{87.5 \text{ J}}{1.5 \text{ kg}}} \approx 7.64 \text{ m/s}
$$

**Problem 3.2**: A 1000 kg car traveling at 20 m/s applies its brakes and comes to a stop. Calculate the work done by the braking force.

**Solution**:
Using the work-energy theorem:
$$\Delta KE = W$$
$$\frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2 = W$$
$$\frac{1}{2}(1000)(0)^2 - \frac{1}{2}(1000)(20)^2 = W$$
$$0 - 200,000 = W$$
$$W = -200,000 \text{ J}$$
(Negative because the brakes oppose motion)

**Problem 3.3**: A 0.5 kg ball is thrown upward with an initial speed of 15 m/s. Calculate the work done by gravity when the ball reaches its maximum height.

**Solution**:
At maximum height, $v_f = 0$ m/s
Using work-energy theorem:
$$W = \Delta KE = \frac{1}{2}m(0)^2 - \frac{1}{2}m(15)^2$$
$$W = 0 - \frac{1}{2}(0.5)(15)^2$$
$$W = -56.25 \text{ J}$$

### Problem 4: Work Done by Friction

**Problem 4.1**: A 5 kg box is pushed across a horizontal floor with a force of 30 N. The coefficient of kinetic friction between the box and the floor is 0.2. If the box is pushed for 10 meters, how much work is done by friction?

**Solution**:
Frictional force:
$$
F_{\text{friction}} = \mu_k \cdot N = \mu_k \cdot m g = 0.2 \times 5 \text{ kg} \times 9.81 \text{ m/s}^2 = 9.81 \text{ N}
$$
Work done by friction:
$$
W = F_{\text{friction}} \cdot d \cdot \cos(180^\circ) = 9.81 \text{ N} \times 10 \text{ m} \times (-1) = -98.1 \text{ J}
$$

**Problem 4.2**: A 1200 kg car skids to a stop from a speed of 25 m/s. If the coefficient of kinetic friction is 0.6, calculate the distance the car skids and the work done by friction.

**Solution**:
Using work-energy theorem:
$$\Delta KE = W_f$$
$$-\frac{1}{2}mv_i^2 = \mu_k mgd$$
$$-\frac{1}{2}(1200)(25)^2 = -0.6(1200)(9.81)d$$
Distance:
$$d = \frac{375,000}{7063.2} = 53.1 \text{ m}$$
Work done by friction:
$$W = -375,000 \text{ J}$$

**Problem 4.3**: A 2 kg block slides up a rough inclined plane that makes an angle of 30° with the horizontal. The coefficient of kinetic friction is 0.25. If the block starts with a speed of 8 m/s, calculate the distance it travels before stopping.

**Solution**:
Normal force:
$$N = mg\cos(30°) = 2(9.81)(0.866) = 17.0 \text{ N}$$
Friction force:
$$f = \mu_k N = 0.25(17.0) = 4.25 \text{ N}$$
Component of weight along plane:
$$mg\sin(30°) = 2(9.81)(0.5) = 9.81 \text{ N}$$
Total opposing force:
$$F_{total} = 4.25 + 9.81 = 14.06 \text{ N}$$
Using work-energy theorem:
$$\frac{1}{2}mv_i^2 = F_{total}d$$
$$\frac{1}{2}(2)(8)^2 = 14.06d$$
$$d = \frac{64}{14.06} = 4.55 \text{ m}$$

### Problem 5: Work Done by a Spring

**Problem 5.1**: A spring with a spring constant of 500 N/m is stretched by 0.1 meters. How much work is done to stretch the spring?

**Solution**:
Work done on the spring:
$$
W = \frac{1}{2} k x^2 = \frac{1}{2} \times 500 \text{ N/m} \times (0.1 \text{ m})^2 = 2.5 \text{ J}
$$

**Problem 5.2**: A 200 N/m spring is compressed by 0.15 m and then released to launch a 0.5 kg ball. Neglecting friction, calculate the speed of the ball when it leaves the spring.

**Solution**:
Work done by spring:
$$W = \frac{1}{2}kx^2 = \frac{1}{2}(200)(0.15)^2 = 2.25 \text{ J}$$
This equals the ball's kinetic energy:
$$2.25 = \frac{1}{2}(0.5)v^2$$
$$v = \sqrt{\frac{4.5}{0.5}} = 3 \text{ m/s}$$

**Problem 5.3**: Two springs with spring constants $k_1 = 300$ N/m and $k_2 = 500$ N/m are compressed in series by 0.2 m. Calculate the total work done.

**Solution**:
Effective spring constant for series springs:
$$\frac{1}{k_{eff}} = \frac{1}{k_1} + \frac{1}{k_2}$$
$$k_{eff} = \frac{k_1k_2}{k_1 + k_2} = \frac{300 \times 500}{800} = 187.5 \text{ N/m}$$
Work done:
$$W = \frac{1}{2}k_{eff}x^2 = \frac{1}{2}(187.5)(0.2)^2 = 3.75 \text{ J}$$

### Problem 6: Work Done by a Variable Force

**Problem 6.1**: A force $F(x) = 3x^2 + 2x$ (in Newtons) acts on an object as it moves from $x = 0$ to $x = 4$ meters. How much work is done by the force?

**Solution**:
Work done by a variable force:
$$
W = \int_{x_1}^{x_2} F(x) \, dx = \int_{0}^{4} (3x^2 + 2x) \, dx
$$
$$
W = \left[ x^3 + x^2 \right]_0^4 = (64 + 16) - (0 + 0) = 80 \text{ J}
$$

**Problem 6.2**: A force $F(x) = 5\sin(x)$ N acts on a particle moving from $x = 0$ to $x = \pi$ meters. Calculate the work done.

**Solution**:
$$W = \int_0^\pi 5\sin(x)dx$$
$$W = -5\cos(x)|_0^\pi$$
$$W = -5[\cos(\pi) - \cos(0)]$$
$$W = -5[-1 - 1] = 10 \text{ J}$$

**Problem 6.3**: A force $F(x) = 2x^3 - 4x$ N acts on an object moving from $x = 1$ to $x = 3$ meters. Find the work done.

**Solution**:
$$W = \int_1^3 (2x^3 - 4x)dx$$
$$W = [\frac{1}{2}x^4 - 2x^2]_1^3$$
$$W = [\frac{1}{2}(81) - 18] - [\frac{1}{2}(1) - 2]$$
$$W = 40.5 - 18 - 0.5 + 2 = 24 \text{ J}$$

### Problem 7: Work Done at an Angle

**Problem 7.1**: A force of 50 N is applied at an angle of 45° to the horizontal to pull a sled 10 meters across the snow. How much work is done?

**Solution**:
Work done:
$$
W = F \cdot d \cdot \cos(\theta) = 50 \text{ N} \times 10 \text{ m} \times \cos(45^\circ) \approx 353.55 \text{ J}
$$

**Problem 7.2**: A worker pulls a crate up a loading ramp using a rope at an angle of 60° to the ramp. If the force applied is 200 N and the crate moves 8 meters along the ramp, calculate the work done by the applied force.

**Solution**:
$$W = F \cdot d \cdot \cos(\theta)$$
$$W = 200 \text{ N} \times 8 \text{ m} \times \cos(60°)$$
$$W = 1600 \times 0.5 = 800 \text{ J}$$

**Problem 7.3**: A boat is pulled to shore with a force of 150 N at an angle of 35° to the horizontal. If the boat moves 15 meters, calculate the work done and the horizontal component of the force.

**Solution**:
Work done:
$$W = F \cdot d \cdot \cos(35°) = 150 \times 15 \times 0.819 = 1,842.75 \text{ J}$$
Horizontal component:
$$F_x = F\cos(35°) = 150 \times 0.819 = 122.85 \text{ N}$$

### Problem 8: Work Done on an Inclined Plane

**Problem 8.1**: A 2 kg object is pushed up a frictionless inclined plane that makes a 30° angle with the horizontal. If the object is pushed 5 meters along the plane with a force of 20 N parallel to the plane, how much work is done?

**Solution**:
Since the force is parallel to the displacement ($\theta = 0^\circ$):
$$
W = F \cdot d \cdot \cos(\theta) = 20 \text{ N} \times 5 \text{ m} \times \cos(0^\circ) = 100 \text{ J}
$$

**Problem 8.2**: A 5 kg box is pulled up a rough inclined plane (μ = 0.3) that makes an angle of 25° with the horizontal. Calculate the work done against friction over a distance of 4 meters along the plane.

**Solution**:
Normal force:
$$N = mg\cos(25°) = 5 \times 9.81 \times 0.906 = 44.44 \text{ N}$$
Friction force:
$$f = \mu N = 0.3 \times 44.44 = 13.33 \text{ N}$$
Work against friction:
$$W = fd = 13.33 \times 4 = 53.32 \text{ J}$$

**Problem 8.3**: A 3 kg block slides down a frictionless inclined plane of length 6 meters at an angle of 40°. Calculate the work done by gravity.

**Solution**:
Work done by gravity:
$$W = mgh = mgd\sin(40°)$$
$$W = 3 \times 9.81 \times 6 \times 0.643$$
$$W = 113.54 \text{ J}$$

### Problem 9: Work Done by a Person

**Problem 9.1**: A person lifts a 15 kg box vertically to a height of 2 meters. How much work is done? (Assume $g = 9.81 \text{ m/s}^2$)

**Solution**:
Work done:
$$
W = F \cdot d \cdot \cos(\theta) = m g h \cdot \cos(0^\circ) = 15 \text{ kg} \times 9.81 \text{ m/s}^2 \times 2 \text{ m} \times 1 = 294.3 \text{ J}
$$

**Problem 9.2**: A person pushes a 50 kg filing cabinet across a floor with μ = 0.2 for 3 meters. If they apply a horizontal force of 150 N, calculate the work done by the person and the work done by friction.

**Solution**:
Normal force = weight:
$$N = mg = 50 \times 9.81 = 490.5 \text{ N}$$
Friction force:
$$f = \mu N = 0.2 \times 490.5 = 98.1 \text{ N}$$
Work done by person:
$$W_p = Fd = 150 \times 3 = 450 \text{ J}$$
Work done by friction:
$$W_f = -fd = -98.1 \times 3 = -294.3 \text{ J}$$

**Problem 9.3**: A person carries a 10 kg box up a flight of stairs that rises 3 meters over a horizontal distance of 4 meters. Calculate the work done against gravity.

**Solution**:
Work against gravity only depends on vertical displacement:
$$W = mgh = 10 \times 9.81 \times 3 = 294.3 \text{ J}$$

### Problem 10: Work Done by Air Resistance

**Problem 10.1**: A 1 kg object is thrown upward with an initial velocity of 20 m/s. If air resistance does -50 J of work on the object during its ascent, what is its maximum height? (Assume $g = 9.81 \text{ m/s}^2$)

**Solution**:
Using the work-energy theorem:
$$
W = \Delta KE + \Delta PE
$$
$$
-50 \text{ J} = \left(0 - \frac{1}{2} \times 1 \text{ kg} \times (20 \text{ m/s})^2\right) + (m g h - 0)
$$
$$
-50 \text{ J} = -200 \text{ J} + (9.81 \text{ m/s}^2 \times 1 \text{ kg} \times h)
$$
$$
h = \frac{150 \text{ J}}{9.81 \text{ m/s}^2} \approx 15.3 \text{ m}
$$

**Problem 10.2**: A skydiver of mass 75 kg reaches a terminal velocity of 50 m/s. Calculate the work done by air resistance in slowing the skydiver from 60 m/s to terminal velocity.

**Solution**:
Using work-energy theorem:
$$W = \Delta KE$$
$$W = \frac{1}{2}m(v_f^2 - v_i^2)$$
$$W = \frac{1}{2}(75)[(50)^2 - (60)^2]$$
$$W = \frac{75}{2}(2500 - 3600)$$
$$W = -41,250 \text{ J}$$

**Problem 10.3**: A baseball (mass 0.145 kg) is hit with an initial velocity of 45 m/s at an angle of 30° above horizontal. If air resistance does -100 J of work on the ball during its flight, calculate its velocity when it reaches its maximum height.

**Solution**:
Initial vertical velocity:
$$v_{yi} = 45\sin(30°) = 22.5 \text{ m/s}$$
Initial horizontal velocity:
$$v_{xi} = 45\cos(30°) = 39 \text{ m/s}$$
Using work-energy theorem in vertical direction:
$$-mgh - \frac{100}{2} = \frac{1}{2}m(0 - v_{yi}^2)$$
$$-0.145(9.81)h - 50 = -0.145(22.5)^2/2$$
$$-1.42h - 50 = -36.6$$
Maximum height:
$$h = \frac{-13.4}{-1.42} = 9.4 \text{ m}$$
Final velocity at maximum height:
$$v_f = v_{xi} = 39 \text{ m/s}$$
