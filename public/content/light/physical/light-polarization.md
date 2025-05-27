## Physical Optics :  Polarization of Light  

### Introduction 
Polarization is a fundamental property of transverse waves, describing the orientation of oscillations in the plane perpendicular to the direction of propagation. For light, an electromagnetic wave, polarization refers to the direction of the electric field vector $\mathbf{E}$. Natural light is typically **unpolarized**, with $\mathbf{E}$ oscillating randomly in all transverse directions. Polarized light, however, has its electric field confined to a specific orientation or pattern. This phenomenon underpins technologies ranging from LCD screens to advanced optical instruments.

---

### Types of Polarization  
Light can exhibit three primary polarization states, determined by the behavior of the electric field vector over time:  

1. **Linear Polarization:**  
   The electric field oscillates in a single plane (e.g., vertical or horizontal). Represented as:  
   $$  
   \mathbf{E}(z, t) = E_0 \cos(kz - \omega t) \, \hat{\mathbf{e}}_x  
   $$  
   where $\hat{\mathbf{e}}_x$ is the unit vector in the $x$-direction.  

2. **Circular Polarization:**  
   The electric field vector rotates with constant magnitude, tracing a circle. This occurs when two perpendicular linear components have equal amplitude and a phase difference of $\pm\pi/2$:  
   - **Right-circular:** $\mathbf{E}_x$ leads $\mathbf{E}_y$ by $\pi/2$.  
   - **Left-circular:** $\mathbf{E}_y$ leads $\mathbf{E}_x$ by $\pi/2$.  

3. **Elliptical Polarization:**  
   The electric field traces an ellipse, arising from unequal amplitudes or a phase difference not equal to $\pm\pi/2$.  

---

### Methods of Polarizing Light  

#### 1. **Selective Absorption (Polarizers):**  
   Polarizing filters, such as Polaroid sheets, transmit light oscillating in a specific direction (the **transmission axis**) while absorbing perpendicular components. When unpolarized light passes through a polarizer, the transmitted intensity is reduced to half:  
   $$  
   I = \frac{I_0}{2}  
   $$  

#### 2. **Reflection (Brewster’s Angle):**  
   When light reflects off a dielectric surface at **Brewster’s angle** $\theta_B$, the reflected light becomes completely polarized parallel to the surface. Brewster’s angle satisfies:  
   $$  
   \tan\theta_B = \frac{n_2}{n_1}  
   $$  
   where $n_1$ and $n_2$ are the refractive indices of the initial and secondary media. Applications include anti-glare sunglasses and laser cavity windows.  

#### 3. **Scattering:**  
   Light scattered by particles (e.g., Rayleigh scattering in the atmosphere) becomes partially polarized. This explains the polarized appearance of skylight.  

#### 4. **Birefringence:**  
   Certain crystals (e.g., calcite) split unpolarized light into two orthogonally polarized rays (ordinary and extraordinary) due to anisotropic refractive indices. This is exploited in **wave plates** to manipulate polarization states.  

---

### Malus’s Law: Intensity of Polarized Light  
When polarized light passes through a second polarizer (analyzer), the transmitted intensity depends on the angle $\theta$ between the polarizer’s transmission axis and the light’s polarization direction:  
$$  
I = I_0 \cos^2\theta  
$$  
This law is foundational for designing polarimetric instruments and optical displays.  

---

### Retardation and Wave Plates  
Wave plates introduce a phase difference ($\Delta\phi$) between orthogonal polarization components using birefringent materials. For a crystal of thickness $d$ and birefringence $\Delta n = n_e - n_o$:  
$$  
\Delta\phi = \frac{2\pi}{\lambda} \Delta n \, d  
$$  
- **Quarter-wave plate ($\Delta\phi = \pi/2$):** Converts linear to circular polarization (and vice versa).  
- **Half-wave plate ($\Delta\phi = \pi$):** Rotates linear polarization by $2\theta$, where $\theta$ is the plate’s optical axis angle.  

---

### Applications of Polarization  
1. **Liquid Crystal Displays (LCDs):**  
   Use polarized light and voltage-controlled liquid crystals to modulate brightness and color.  
2. **Optical Microscopy:**  
   Polarized light microscopy reveals stress patterns in materials and biological structures like collagen.  
3. **Astronomy:**  
   Polarimetry measures magnetic fields in stars and interstellar dust alignment.  
4. **Fiber Optics:**  
   Polarization-maintaining fibers preserve signal integrity in telecommunications.  
5. **Quantum Cryptography:**  
   Polarized photons encode information in quantum key distribution (e.g., BB84 protocol).  

---

### Mathematical Representation: Jones Calculus  
The polarization state of light can be described using **Jones vectors**, while optical elements (e.g., polarizers, wave plates) are represented by **Jones matrices**. For example:  
- **Linear polarization along $x$-axis:**  
  $$  
  \mathbf{J} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}  
  $$  
- **Quarter-wave plate with fast axis at $45^\circ$:**  
  $$  
  \mathbf{W} = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}  
  $$  
The output polarization is obtained by matrix multiplication: $\mathbf{J}_{\text{out}} = \mathbf{W} \mathbf{J}_{\text{in}}$.  

---

### Stokes Parameters: Characterizing Partial Polarization  
The Stokes vector $\mathbf{S} = [S_0, S_1, S_2, S_3]^T$ quantifies the polarization state of light, including partially polarized or unpolarized components:  
- $S_0$: Total intensity.  
- $S_1$: Difference between horizontal and vertical linear polarization.  
- $S_2$: Difference between $+45^\circ$ and $-45^\circ$ linear polarization.  
- $S_3$: Difference between right- and left-circular polarization.  

---

### Practical Problems in Polarization

### Problem 1: Malus's Law and Polarizer Efficiency

Unpolarized light of intensity 100 mW/cm² passes through two polarizers.

**Question**: 
a) What is the intensity after the first polarizer?
b) If the second polarizer is rotated 30° relative to the first, what is the final intensity?
c) What angle gives 25% of the maximum transmitted intensity?

**Solution**:
a) After first polarizer:
   $$I_1 = \frac{I_0}{2} = 50\text{ mW/cm²}$$

b) After second polarizer:
   $$I_2 = I_1\cos^2(30°) = 50 \times 0.75 = 37.5\text{ mW/cm²}$$

c) For 25% intensity:
   $$\cos^2\theta = 0.25$$
   $$\theta = 60°$$

### Problem 2: Brewster's Angle

Light travels from air (n₁ = 1.0) to glass (n₂ = 1.52).

**Question**: 
a) Calculate the Brewster's angle
b) What is the angle of refraction at this incident angle?
c) If the incident light is unpolarized, what percentage is reflected?

**Solution**:
a) Brewster's angle:
   $$\theta_B = \tan^{-1}(\frac{n_2}{n_1}) = \tan^{-1}(1.52) = 56.7°$$

b) Refraction angle:
   $$\theta_r = 90° - \theta_B = 33.3°$$
   (perpendicular to reflected ray)

c) Reflected percentage:
   Only s-polarization reflects:
   $$\text{Percentage} = 50\%\text{ of incident unpolarized light}$$

### Problem 3: Quarter-Wave Plate

A quarter-wave plate is used to convert linearly polarized light (λ = 589 nm) to circular polarization.

**Question**: 
a) What should be the thickness of a quartz plate (Δn = 0.009)?
b) How many wavelengths thick is the plate?
c) What happens if the incident light is at 30° to the fast axis?

**Solution**:
a) Thickness:
   $$d = \frac{\lambda}{4\Delta n} = \frac{589 \times 10^{-9}}{4 \times 0.009} = 16.4\text{ μm}$$

b) Number of wavelengths:
   $$N = \frac{d}{\lambda} = \frac{16.4 \times 10^{-6}}{589 \times 10^{-9}} = 27.8$$

c) At 30°:
   Elliptical polarization with ratio:
   $$\frac{E_y}{E_x} = \tan(30°) = 0.577$$

### Problem 4: Optical Activity

Glucose solution rotates plane-polarized light by 66.5°/dm·g/mL.

**Question**: 
a) What concentration gives 20° rotation in a 10 cm cell?
b) If the solution appears dark between crossed polarizers, how many complete rotations occurred?
c) Calculate the specific rotation at 20°C.

**Solution**:
a) Concentration:
   $$c = \frac{20^\circ}{66.5^\circ/\text{dm·g/mL} \times 1\text{ dm}} = 0.301\text{ g/mL}$$

b) Complete rotations:
   $$N = \frac{\theta}{90^\circ} = \frac{20^\circ}{90^\circ} = 0.22\text{ rotations}$$

c) Specific rotation:
   $$[\alpha]_D^{20} = \frac{\alpha}{l \times c} = 66.5^\circ\text{ /dm·g/mL}$$

### Problem 5: Stress Birefringence

A polycarbonate plate under stress shows a path difference of 500 nm.

**Question**: 
a) What is the maximum stress difference?
b) If the sample is 5 mm thick, calculate the birefringence
c) What is the stress-optic coefficient if maximum stress is 15 MPa?
a) What is the stress-optical coefficient if the stress is 10 MPa?
b) What wavelength light will be completely blocked by crossed polarizers?
c) Calculate the phase difference introduced.

**Solution**:
a) Stress-optical coefficient:
   $$C = \frac{\Delta n}{σ} = \frac{500 \times 10^{-9}}{10 \times 10^6} = 5 \times 10^{-11}\text{ Pa}^{-1}$$

b) Blocked wavelength:
   $$\lambda = \frac{\Delta nd}{m + \frac{1}{2}} = 1000\text{ nm}$$
   (m = integer)

c) Phase difference:
   $$\phi = \frac{2\pi\Delta nd}{\lambda} = 3.14\text{ radians}$$

### Problem 6: Liquid Crystal Display

A twisted nematic LCD has a 90° twist and d = 5 μm.

**Question**: 
a) Calculate the required birefringence for optimal transmission
b) What voltage creates a phase shift of π/2?
c) What is the contrast ratio if polarizers are 99.9% efficient?

**Solution**:
a) Required birefringence:
   $$\Delta n = \frac{\lambda}{4d} = 0.1178$$

b) Voltage for π/2 shift:
   $$V = V_{th}\sqrt{1 + (\frac{\pi}{2})^2} = 2.24V_{th}$$

c) Contrast ratio:
   $$CR = \frac{0.999}{0.001} = 999:1$$

### Problem 7: Reflection Polarization

Sunlight reflects from a lake surface.

**Question**: 
a) At what angle is reflected light completely polarized?
b) What fraction of unpolarized light is reflected at this angle?
c) How does polarizing sunglasses reduce glare?

**Solution**:
a) Brewster's angle for water (n = 1.33):
   $$\theta_B = \tan^{-1}(1.33) = 53.1°$$

b) Reflected fraction:
   $$R = \left|\frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}\right|^2 = 0.041$$
   or 4.1%

c) Sunglasses block vertically polarized light:
   Transmission = cos²θ ≈ 0 for reflected glare

### Problem 8: Faraday Rotation

A 10 cm terbium glass rod has Verdet constant V = 32 rad/T·m.

**Question**: 
a) What magnetic field gives 45° rotation?
b) Calculate the rotation per tesla
c) What field strength makes the rod act as a half-wave plate?

**Solution**:
a) Required field:
   $$B = \frac{\theta}{VL} = \frac{0.785}{32 \times 0.1} = 0.245\text{ T}$$

b) Rotation per tesla:
   $$\frac{\theta}{B} = VL = 3.2\text{ rad/T} = 183°\text{ /T}$$

c) Half-wave plate field:
   $$B = \frac{\pi}{VL} = 0.491\text{ T}$$

### Problem 9: Photoelasticity

A stressed plastic component shows 3 fringes when viewed with 500 nm light.

**Question**: 
a) What is the maximum stress difference?
b) If the sample is 5 mm thick, calculate the birefringence
c) What is the stress-optic coefficient if maximum stress is 15 MPa?

**Solution**:
a) Stress difference:
   $$\sigma_1 - \sigma_2 = \frac{Nf_σ}{t} = \frac{3 \times 7}{0.005} = 4.2\text{ MPa}$$

b) Birefringence:
   $$\Delta n = \frac{N\lambda}{t} = \frac{3 \times 500 \times 10^{-9}}{5 \times 10^{-3}} = 3 \times 10^{-4}$$

c) Stress-optic coefficient:
   $$C = \frac{\Delta n}{\sigma} = 2 \times 10^{-11}\text{ Pa}^{-1}$$

### Problem 10: Polarization Microscopy

A birefringent crystal is observed under crossed polarizers.

**Question**: 
a) What thickness gives first-order interference with Δn = 0.008?
b) Calculate the transmission if polarizers are misaligned by 2°
c) What wavelength appears brightest for d = 30 μm?

**Solution**:
a) First-order thickness:
   $$d = \frac{\lambda}{\Delta n} = \frac{550 \times 10^{-9}}{0.008} = 68.75\text{ μm}$$

b) Transmission with misalignment:
   $$T = \sin^2(2°) = 0.001$$
   or 0.1%

c) Brightest wavelength:
   $$\lambda = \frac{\Delta nd}{m} = \frac{0.008 \times 30 \times 10^{-6}}{1} = 240\text{ nm}$$


---

### Conclusion  
Polarization is a cornerstone of physical optics, bridging classical wave theory and quantum mechanics. From everyday applications like sunglasses to cutting-edge quantum technologies, the ability to control and measure light’s polarization state has transformed science and engineering. By mastering these principles, we unlock new possibilities in communication, material analysis, and our understanding of the universe’s fundamental workings.