## Physical Optics : Coherence and Applications  

### Introduction
Coherence describes the correlation between the phases of a light wave at different points in space (spatial coherence) or time (temporal coherence). It governs the ability of light to form stable interference patterns and underpins technologies from holography to quantum computing. This section explores the principles of coherence, its mathematical description, and its transformative applications.

---

### Types of Coherence  

#### 1. **Temporal Coherence**  
Temporal coherence measures the phase correlation of a wave with itself at different times. It is quantified by the **coherence time** ($\tau_c$) and **coherence length** ($L_c$):  
$$
L_c = c \cdot \tau_c = \frac{\lambda^2}{\Delta\lambda}
$$  
where $c$ is the speed of light, $\lambda$ is the central wavelength, and $\Delta\lambda$ is the spectral bandwidth.  
- **High temporal coherence** (e.g., lasers, $\Delta\lambda \sim 10^{-6}$ nm): Enables long-path interference (e.g., Michelson interferometry).  
- **Low temporal coherence** (e.g., sunlight, $\Delta\lambda \sim 100$ nm): Limits interference to short path differences.  

#### 2. **Spatial Coherence**  
Spatial coherence measures the phase correlation between waves at different points in space. For a source of angular size $\theta$, the **transverse coherence length** ($l_t$) at a distance $D$ is:  
$$
l_t \approx \frac{\lambda}{\theta}
$$  
Extended sources (e.g., thermal lamps) exhibit low spatial coherence, while laser beams (collimated and monochromatic) achieve near-perfect spatial coherence.

---

### Mathematical Framework  

#### Mutual Coherence Function  
The mutual coherence function $\Gamma(\mathbf{r}_1, \mathbf{r}_2, \tau)$ quantifies the correlation between the electric fields at points $\mathbf{r}_1$ and $\mathbf{r}_2$ with time delay $\tau$:  
$$
\Gamma(\mathbf{r}_1, \mathbf{r}_2, \tau) = \langle E(\mathbf{r}_1, t) E^*(\mathbf{r}_2, t + \tau) \rangle
$$  
where $\langle \cdot \rangle$ denotes time averaging.  

#### Degree of Coherence  
The normalized **complex degree of coherence** is:  
$$
\gamma(\mathbf{r}_1, \mathbf{r}_2, \tau) = \frac{\Gamma(\mathbf{r}_1, \mathbf{r}_2, \tau)}{\sqrt{\Gamma(\mathbf{r}_1, \mathbf{r}_1, 0) \Gamma(\mathbf{r}_2, \mathbf{r}_2, 0)}}
$$  
- **$|\gamma| = 1$:** Perfect coherence.  
- **$|\gamma| = 0$:** Complete incoherence.  

---

### Applications of Coherence  

#### 1. **Holography**  
Holograms record the interference pattern between a coherent reference wave and the wave scattered by an object. Reconstruction with coherent light reproduces a 3D image.  

#### 2. **Optical Coherence Tomography (OCT)**  
OCT uses low-coherence light to perform cross-sectional imaging in biological tissues. The short coherence length ($L_c \sim 1–10 \, \mu\text{m}$) enables micron-scale axial resolution via interferometric depth sectioning.  

#### 3. **Laser Interferometry**  
High-coherence lasers enable precision measurements:  
- **Gravitational Wave Detection (LIGO):** Measures spacetime distortions ($\Delta L \sim 10^{-18}$ m) using kilometer-scale interferometers.  
- **Surface Metrology:** Detects sub-nanometer surface irregularities.  

#### 4. **Radio Interferometry (VLBI)**  
Very Long Baseline Interferometry combines signals from radio telescopes globally, achieving angular resolutions of microarcseconds. The spatial coherence of radio waves allows imaging distant astrophysical objects like black holes.  

#### 5. **Quantum Coherence**  
Quantum systems (e.g., qubits in superconductors or trapped ions) exploit coherence to maintain superposition states. Decoherence—loss of quantum coherence due to environmental interactions—is a key challenge in quantum computing.  

---

### Coherence in Quantum Optics  
In quantum mechanics, coherence is tied to the phase stability of probability amplitudes. For example:  
- **Coherent States (Laser Light):** Minimize uncertainty in phase and amplitude, approximating classical electromagnetic waves.  
- **Squeezed States:** Reduce noise in one quadrature (phase or amplitude) at the expense of the other, enhancing precision in quantum metrology.  

---

### Factors Affecting Coherence  
1. **Source Stability:** Mechanical vibrations or thermal fluctuations degrade coherence.  
2. **Spectral Purity:** Broader bandwidths reduce temporal coherence.  
3. **Environmental Noise:** Scattering and absorption in the medium disrupt spatial coherence.  

---

### Practice Problems in Light Coherence

### Problem 1: Temporal Coherence of Laser Light

A He-Ne laser operates at 632.8 nm with spectral width Δλ = 0.002 nm.

**Question**: 
a) Calculate the coherence length
b) What is the coherence time?
c) How many wavelengths fit within the coherence length?

**Solution**:
a) Coherence length:
   $$L_c = \frac{\lambda^2}{\Delta\lambda} = \frac{(632.8 \times 10^{-9})^2}{0.002 \times 10^{-9}} = 0.2\text{ m}$$

b) Coherence time:
   $$\tau_c = \frac{L_c}{c} = \frac{0.2}{3 \times 10^8} = 0.67\text{ ns}$$

c) Number of wavelengths:
   $$N = \frac{L_c}{\lambda} = \frac{0.2}{632.8 \times 10^{-9}} = 316,000$$

### Problem 2: Spatial Coherence

A quasi-monochromatic source of diameter 0.1 mm is observed at 1 m distance.

**Question**: 
a) Calculate the coherence area at λ = 500 nm
b) What is the angular coherence?
c) How does doubling the source size affect coherence area?

**Solution**:
a) Coherence area:
   $$A_c = \left(\frac{\lambda R}{a}\right)^2 = \left(\frac{500 \times 10^{-9} \times 1}{0.1 \times 10^{-3}}\right)^2 = 2.5 \times 10^{-8}\text{ m}^2$$

b) Angular coherence:
   $$\Delta\theta = \frac{\lambda}{a} = 5 \times 10^{-3}\text{ rad}$$

c) Effect of doubling:
   $$A_{c,new} = \frac{A_c}{4}$$
   Coherence area reduces to one-fourth

### Problem 3: White Light Coherence

Consider white light with Δλ = 300 nm centered at 550 nm.

**Question**: 
a) What is the coherence length?
b) How many fringes are visible in a Michelson interferometer?
c) Calculate the minimum path difference for fringe visibility < 10%

**Solution**:
a) Coherence length:
   $$L_c = \frac{\lambda^2}{\Delta\lambda} = \frac{(550 \times 10^{-9})^2}{300 \times 10^{-9}} = 1.01\text{ μm}$$

b) Number of fringes:
   $$N = \frac{L_c}{\lambda} = \frac{1.01 \times 10^{-6}}{550 \times 10^{-9}} \approx 2$$

c) Minimum path difference:
   $$\Delta L = L_c\ln(10) = 2.33\text{ μm}$$

### Problem 4: LED Source Coherence

An LED emits at 470 nm with FWHM of 30 nm.

**Question**: 
a) Determine the coherence time
b) What is the optimum condenser aperture?
c) Compare coherence length to a laser (Δλ = 0.01 nm)

**Solution**:
a) Coherence time:
   $$\tau_c = \frac{\lambda^2}{c\Delta\lambda} = \frac{(470 \times 10^{-9})^2}{3 \times 10^8 \times 30 \times 10^{-9}} = 24.6\text{ fs}$$

b) Optimum aperture:
   $$\text{NA}_{cond} = 0.75 \times 0.5 = 0.375$$

c) Ratio of coherence lengths:
   $$\frac{L_{c,laser}}{L_{c,LED}} = \frac{\Delta\lambda_{LED}}{\Delta\lambda_{laser}} = 3000$$

### Problem 5: Interference Filter Effects

A filter narrows emission from Δλ = 50 nm to 5 nm.

**Question**: 
a) How does this affect coherence length?
b) Calculate maximum interferometer delay possible
c) What is the coherence area if source diameter is 0.5 mm?

**Solution**:
a) Coherence length ratio:
   $$\frac{L_{c,new}}{L_{c,old}} = \frac{\Delta\lambda_{old}}{\Delta\lambda_{new}} = 10$$

b) Maximum delay:
   $$\tau_{max} = \frac{\lambda^2}{c\Delta\lambda_{new}} = 0.37\text{ ps}$$

c) Coherence area:
   $$A_c = \pi\left(\frac{\lambda R}{2a}\right)^2 = 1.96 \times 10^{-7}\text{ m}^2$$

### Problem 6: X-ray Coherence

Synchrotron X-rays (λ = 0.1 nm, Δλ = 0.001 nm) illuminate a sample.

**Question**: 
a) What is the longitudinal coherence length?
b) Calculate transverse coherence at 10 m from 100 μm source
c) What source size gives 1 mm coherence width?

**Solution**:
a) Longitudinal coherence:
   $$L_c = \frac{\lambda^2}{\Delta\lambda} = 10\text{ nm}$$

b) Transverse coherence:
   $$\xi_t = \frac{\lambda R}{2\pi a} = 159\text{ μm}$$

c) Required source size:
   $$a = \frac{\lambda R}{2\pi\xi_t} = 0.16\text{ μm}$$

### Problem 7: Coherence in Imaging

A microscope uses partially coherent illumination (source diameter 1 mm).

**Question**: 
a) Calculate coherence factor at NA = 0.5
b) What is the optimum condenser aperture?
c) How does resolution compare to coherent imaging?

**Solution**:
a) Coherence factor:
   $$σ = \frac{\text{NA}_{cond}}{\text{NA}_{obj}} = 0.75$$

b) Optimum aperture:
   $$\text{NA}_{cond} = 0.75 \times 0.5 = 0.375$$

c) Resolution ratio:
   $$\frac{r_{partial}}{r_{coherent}} = 0.84$$

### Problem 8: Coherence in Communications

An optical fiber system uses 1550 nm light with 1 nm bandwidth.

**Question**: 
a) What is the maximum data rate?
b) Calculate coherence length in fiber (n = 1.5)
c) How does dispersion affect coherence?

**Solution**:
a) Maximum data rate:
   $$R_{max} = \frac{1}{\tau_c} = \frac{c\Delta\lambda}{\lambda^2} = 125\text{ GHz}$$

b) Coherence length in fiber:
   $$L_c = \frac{\lambda^2}{n\Delta\lambda} = 1.6\text{ mm}$$

c) Dispersion effect:
   $$L_{c,effective} = \frac{L_c}{\sqrt{1 + (D\Delta\lambda L)^2}}$$

### Problem 9: Quantum Coherence

A quantum dot emits single photons with Δν = 1 GHz.

**Question**: 
a) What is the photon coherence time?
b) Calculate the coherence length
c) How many photons occupy the coherence length?

**Solution**:
a) Coherence time:
   $$\tau_c = \frac{1}{2\pi\Delta\nu} = 159\text{ ps}$$

b) Coherence length:
   $$L_c = c\tau_c = 47.7\text{ mm}$$

c) Photon occupation:
   $$N = 1$$ 
   (single photon source)

### Problem 10: Coherence in Holography

A holographic setup uses 532 nm laser light.

**Question**: 
a) What path difference is allowable for 90% visibility?
b) Calculate required source size for 10 cm coherence width
c) How does coherence affect maximum hologram size?

**Solution**:
a) Allowable path difference:
   $$\Delta L = L_c\ln(1/0.9) = 0.105L_c$$

b) Required source size:
   $$a = \frac{\lambda R}{w} = 5.32\text{ μm}$$

c) Maximum size:
   $$D_{max} = \sqrt{\frac{L_c\lambda}{2}}$$
   for path difference < coherence length



---

### Conclusion  
Coherence bridges classical and quantum optics, enabling technologies that redefine precision and capability. From medical imaging to probing the fabric of spacetime, coherence principles drive innovation across disciplines. As quantum technologies advance, controlling coherence at the single-photon level will unlock new frontiers in computation, communication, and fundamental physics.  