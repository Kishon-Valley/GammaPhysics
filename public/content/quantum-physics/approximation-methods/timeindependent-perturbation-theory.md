## Time-Independent Perturbation Theory

### Introduction 

Time-independent perturbation theory is a mathematical approach used in quantum mechanics to find approximate solutions to problems that cannot be solved exactly. This method is applicable when the Hamiltonian of a system can be expressed as the sum of a solvable part (the unperturbed Hamiltonian) and a small perturbation.

## Theoretical Foundation

### Basic Formulation

The total Hamiltonian of the system is written as:

$$H = H_0 + \lambda V$$

Where:
- $H_0$ is the unperturbed Hamiltonian with known eigenstates and eigenvalues
- $V$ is the perturbation
- $\lambda$ is a dimensionless parameter that controls the strength of the perturbation

The eigenstates and eigenvalues of $H_0$ satisfy:

$$H_0 |n^{(0)}\rangle = E_n^{(0)} |n^{(0)}\rangle$$

The goal is to find the perturbed eigenstates $|n\rangle$ and eigenvalues $E_n$ of the total Hamiltonian:

$$H |n\rangle = E_n |n\rangle$$

### Perturbative Expansion

Both the energy eigenvalues and eigenstates are expanded in powers of $\lambda$:

$$E_n = E_n^{(0)} + \lambda E_n^{(1)} + \lambda^2 E_n^{(2)} + \ldots$$

$$|n\rangle = |n^{(0)}\rangle + \lambda |n^{(1)}\rangle + \lambda^2 |n^{(2)}\rangle + \ldots$$

Where $E_n^{(k)}$ and $|n^{(k)}\rangle$ represent the $k$-th order corrections to the energy and state, respectively.

## First-Order Perturbation Theory

### Non-Degenerate Case

For a non-degenerate unperturbed energy level $E_n^{(0)}$, the first-order correction to the energy is:

$$E_n^{(1)} = \langle n^{(0)}|V|n^{(0)}\rangle$$

This represents the expectation value of the perturbation in the unperturbed state.

The first-order correction to the eigenstate is:

$$|n^{(1)}\rangle = \sum_{m \neq n} \frac{\langle m^{(0)}|V|n^{(0)}\rangle}{E_n^{(0)} - E_m^{(0)}} |m^{(0)}\rangle$$

### Degenerate Case

If the unperturbed energy level $E_n^{(0)}$ is $g$-fold degenerate, we must use degenerate perturbation theory. We first find the matrix elements of the perturbation in the degenerate subspace:

$$V_{ij} = \langle n_i^{(0)}|V|n_j^{(0)}\rangle$$

Where $|n_i^{(0)}\rangle$ and $|n_j^{(0)}\rangle$ are different degenerate states with the same energy $E_n^{(0)}$.

The first-order corrections to the energies are the eigenvalues of this matrix, and the correct zeroth-order states are the corresponding eigenvectors.

## Second-Order Perturbation Theory

### Non-Degenerate Case

The second-order correction to the energy is:

$$E_n^{(2)} = \sum_{m \neq n} \frac{|\langle m^{(0)}|V|n^{(0)}\rangle|^2}{E_n^{(0)} - E_m^{(0)}}$$

This expression shows that the second-order energy shift depends on the coupling of the unperturbed state to all other unperturbed states, weighted by the energy difference.

### Degenerate Case

For degenerate states, after finding the correct zeroth-order states by diagonalizing the perturbation in the degenerate subspace, the second-order correction can be calculated using the formula:

$$E_{n_i}^{(2)} = \sum_{m \notin \{n\}} \frac{|\langle m^{(0)}|V|n_i^{(0)}\rangle|^2}{E_n^{(0)} - E_m^{(0)}}$$

Where $|n_i^{(0)}\rangle$ is one of the correct zeroth-order states.

## Applications

### Stark Effect

The Stark effect describes the splitting of spectral lines in an electric field. For the hydrogen atom in a uniform electric field $\vec{E} = E\hat{z}$, the perturbation is:

$$V = eEz$$

For the ground state, the first-order correction vanishes due to the symmetry of the $1s$ wavefunction. The second-order correction gives:

$$E_{1s}^{(2)} = -\frac{1}{2}\alpha E^2$$

Where $\alpha$ is the polarizability of the hydrogen atom in its ground state.

### Zeeman Effect

The Zeeman effect describes the splitting of spectral lines in a magnetic field. For an atom in a uniform magnetic field $\vec{B} = B\hat{z}$, the perturbation is:

$$V = \frac{e}{2m_e}(L_z + 2S_z)B$$

For a state with quantum numbers $n$, $l$, $m_l$, and $m_s$, the first-order energy correction is:

$$E^{(1)} = \mu_B B(m_l + 2m_s)$$

Where $\mu_B = \frac{e\hbar}{2m_e}$ is the Bohr magneton.

### Anharmonic Oscillator

For a harmonic oscillator with a small anharmonic perturbation:

$$V = \lambda x^4$$

The first-order energy correction for the $n$-th energy level is:

$$E_n^{(1)} = \lambda \langle n^{(0)}|x^4|n^{(0)}\rangle = \lambda \frac{3\hbar^2}{4m^2\omega^2}(2n^2 + 2n + 1)$$

## Convergence and Limitations

Perturbation theory is only valid when the perturbation is small compared to the unperturbed Hamiltonian. The series may diverge if:

1. The perturbation is too large
2. There are energy levels that are too close to each other
3. The perturbation connects states with very different energies

In such cases, alternative methods like the variational method or numerical techniques may be more appropriate.

## Practice Problems

### Problem 1: Ground State Energy of Perturbed Harmonic Oscillator

**Question:** Consider a harmonic oscillator with the Hamiltonian $H_0 = \frac{p^2}{2m} + \frac{1}{2}m\omega^2 x^2$ perturbed by $V = \lambda x^3$. Calculate the first-order correction to the ground state energy.

**Answer:** The ground state wavefunction of the harmonic oscillator is:

$$\psi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} e^{-\frac{m\omega x^2}{2\hbar}}$$

The first-order correction is:

$$E_0^{(1)} = \langle 0^{(0)}|V|0^{(0)}\rangle = \lambda \langle 0^{(0)}|x^3|0^{(0)}\rangle$$

Due to the odd parity of $x^3$ and the even parity of the ground state wavefunction, this integral vanishes:

$$E_0^{(1)} = 0$$

### Problem 2: Stark Effect in Hydrogen First Excited State

**Question:** Calculate the first-order energy shifts for the $n=2$ states of the hydrogen atom in a uniform electric field $\vec{E} = E\hat{z}$.

**Answer:** The $n=2$ level of hydrogen is four-fold degenerate, consisting of the $2s$, $2p_x$, $2p_y$, and $2p_z$ states. The perturbation is $V = eEz$.

The matrix elements of $z$ between the $2s$ and $2p_z$ states are:

$$\langle 2s|z|2p_z\rangle = \langle 2p_z|z|2s\rangle = 3a_0$$

Where $a_0$ is the Bohr radius.

In the basis of $\{|2s\rangle, |2p_z\rangle\}$, the perturbation matrix is:

$$V = eE\begin{pmatrix} 0 & 3a_0 \\ 3a_0 & 0 \end{pmatrix}$$

The eigenvalues of this matrix are $\pm 3eEa_0$, giving the first-order energy corrections:

$$E_{\pm}^{(1)} = \pm 3eEa_0$$

The $2p_x$ and $2p_y$ states remain unaffected to first order.

### Problem 3: Second-Order Energy Correction

**Question:** For a particle in a one-dimensional infinite square well of width $a$ with a perturbation $V = \lambda x$, calculate the second-order correction to the ground state energy.

**Answer:** The unperturbed eigenstates and eigenvalues are:

$$\psi_n^{(0)}(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right), \quad E_n^{(0)} = \frac{n^2\pi^2\hbar^2}{2ma^2}$$

The matrix elements of the perturbation are:

$$\langle m^{(0)}|V|n^{(0)}\rangle = \lambda\int_0^a \sqrt{\frac{2}{a}}\sin\left(\frac{m\pi x}{a}\right) \cdot x \cdot \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right) dx$$

For the ground state ($n=1$), we need:

$$\langle m^{(0)}|V|1^{(0)}\rangle = \lambda\frac{2}{a}\int_0^a x\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{\pi x}{a}\right) dx$$

This integral is non-zero only when $m$ is even, and equals:

$$\langle m^{(0)}|V|1^{(0)}\rangle = \lambda\frac{8am}{(m^2-1)^2\pi^2} \quad \text{for even } m$$

The second-order correction is:

$$E_1^{(2)} = \sum_{m \neq 1} \frac{|\langle m^{(0)}|V|1^{(0)}\rangle|^2}{E_1^{(0)} - E_m^{(0)}}$$

Substituting and summing over even values of $m$:

$$E_1^{(2)} = -\lambda^2\frac{8ma^4}{\pi^4\hbar^2}\sum_{m=2,4,6,...} \frac{m^2}{(m^2-1)^4}$$

This sum evaluates to:

$$E_1^{(2)} = -\lambda^2\frac{a^4}{3\pi^2\hbar^2}$$

### Problem 4: Degenerate Perturbation Theory

**Question:** Consider a two-dimensional isotropic harmonic oscillator with Hamiltonian $H_0 = \frac{p_x^2 + p_y^2}{2m} + \frac{1}{2}m\omega^2(x^2 + y^2)$. A perturbation $V = \alpha(x^2 - y^2)$ is applied. Find the first-order corrections to the energy levels.

**Answer:** The energy levels of the unperturbed system are:

$$E_{n_x,n_y}^{(0)} = \hbar\omega(n_x + n_y + 1)$$

Each level with $n_x + n_y = n$ is $(n+1)$-fold degenerate.

For the first excited state ($n=1$), we have two degenerate states: $|1,0\rangle$ and $|0,1\rangle$. The perturbation matrix in this basis is:

$$V_{ij} = \alpha\begin{pmatrix} \langle 1,0|x^2-y^2|1,0\rangle & \langle 1,0|x^2-y^2|0,1\rangle \\ \langle 0,1|x^2-y^2|1,0\rangle & \langle 0,1|x^2-y^2|0,1\rangle \end{pmatrix}$$

Computing these matrix elements:

$$\langle 1,0|x^2|1,0\rangle = \frac{3\hbar}{2m\omega}, \quad \langle 1,0|y^2|1,0\rangle = \frac{\hbar}{2m\omega}$$
$$\langle 0,1|x^2|0,1\rangle = \frac{\hbar}{2m\omega}, \quad \langle 0,1|y^2|0,1\rangle = \frac{3\hbar}{2m\omega}$$
$$\langle 1,0|x^2-y^2|0,1\rangle = \langle 0,1|x^2-y^2|1,0\rangle = 0$$

Therefore:

$$V_{ij} = \alpha\begin{pmatrix} \frac{\hbar}{m\omega} & 0 \\ 0 & -\frac{\hbar}{m\omega} \end{pmatrix}$$

The eigenvalues of this matrix are $\alpha\frac{\hbar}{m\omega}$ and $-\alpha\frac{\hbar}{m\omega}$, giving the first-order energy corrections:

$$E_1^{(1)} = \alpha\frac{\hbar}{m\omega}, \quad E_2^{(1)} = -\alpha\frac{\hbar}{m\omega}$$

### Problem 5: Van der Waals Interaction

**Question:** Two neutral hydrogen atoms, each in their ground states, are separated by a distance $R$ that is much larger than the Bohr radius. Using second-order perturbation theory, show that the interaction energy varies as $1/R^6$.

**Answer:** The perturbation is the electrostatic interaction between the two atoms:

$$V = \frac{e^2}{4\pi\epsilon_0}\left(\frac{1}{R} - \frac{1}{|\vec{R} - \vec{r}_2 + \vec{r}_1|} - \frac{1}{|\vec{R} + \vec{r}_2 - \vec{r}_1|} + \frac{1}{|\vec{R} + \vec{r}_2 - \vec{r}_1|}\right)$$

Where $\vec{r}_1$ and $\vec{r}_2$ are the positions of the electrons relative to their respective nuclei.

For large $R$, we can expand this in powers of $r/R$:

$$V \approx \frac{e^2}{4\pi\epsilon_0}\frac{1}{R^3}[3(\vec{r}_1 \cdot \hat{R})(\vec{r}_2 \cdot \hat{R}) - \vec{r}_1 \cdot \vec{r}_2] + O(R^{-4})$$

The first-order correction vanishes because the ground state of hydrogen has spherical symmetry. The second-order correction is:

$$E^{(2)} = \sum_{m,n \neq 0} \frac{|\langle 0,0|V|m,n\rangle|^2}{E_0^{(0)} - E_m^{(0)} - E_n^{(0)}}$$

After evaluating this sum, the result is:

$$E^{(2)} = -\frac{C_6}{R^6}$$

Where $C_6$ is a constant that depends on the polarizability of the hydrogen atom.

### Problem 6: Fine Structure of Hydrogen

**Question:** The relativistic correction to the kinetic energy of an electron in a hydrogen atom is $V = -\frac{p^4}{8m^3c^2}$. Calculate the first-order correction to the energy levels.

**Answer:** For the hydrogen atom with principal quantum number $n$, the first-order correction is:

$$E_n^{(1)} = \langle n,l,m|V|n,l,m\rangle = -\frac{1}{8m^3c^2}\langle n,l,m|p^4|n,l,m\rangle$$

Using the virial theorem and the properties of the Coulomb potential:

$$\langle p^4 \rangle = 2m^2\langle V^2 \rangle = 2m^2\left(\frac{e^2}{4\pi\epsilon_0}\right)^2\langle \frac{1}{r^2}\rangle$$

For the hydrogen atom:

$$\langle \frac{1}{r^2}\rangle = \frac{1}{n^3a_0^2}\frac{1}{l+1/2}$$

Therefore:

$$E_n^{(1)} = -\frac{E_n^{(0)2}}{2mc^2}\frac{1}{n}\left(\frac{4}{l+1/2} - 3\right)$$

Where $E_n^{(0)} = -\frac{me^4}{32\pi^2\epsilon_0^2\hbar^2}\frac{1}{n^2}$ is the unperturbed energy.

This gives the fine structure correction:

$$E_n^{(1)} = -\frac{\alpha^2 E_n^{(0)}}{n}\left(\frac{4}{l+1/2} - 3\right)$$

Where $\alpha = \frac{e^2}{4\pi\epsilon_0\hbar c} \approx \frac{1}{137}$ is the fine structure constant.

### Problem 7: Hyperfine Structure

**Question:** The interaction between the electron spin $\vec{S}$ and the nuclear spin $\vec{I}$ in a hydrogen atom is given by $V = A\vec{S} \cdot \vec{I}$, where $A$ is a constant. Calculate the energy splitting of the ground state.

**Answer:** The ground state of hydrogen has $l=0$, so the electron spin $\vec{S}$ and the nuclear spin $\vec{I}$ couple to form the total spin $\vec{F} = \vec{S} + \vec{I}$. For the hydrogen atom, $S=1/2$ and $I=1/2$.

The possible values of the total spin quantum number are $F = |S-I|, S+I = 0, 1$.

Using the identity $\vec{S} \cdot \vec{I} = \frac{1}{2}[F(F+1) - S(S+1) - I(I+1)]$:

For $F=0$: $\vec{S} \cdot \vec{I} = \frac{1}{2}[0 - \frac{3}{4} - \frac{3}{4}] = -\frac{3}{4}$
For $F=1$: $\vec{S} \cdot \vec{I} = \frac{1}{2}[2 - \frac{3}{4} - \frac{3}{4}] = \frac{1}{4}$

Therefore, the energy splitting is:

$$\Delta E = A(F=1) - A(F=0) = A$$

This gives the hyperfine splitting of the hydrogen ground state, which corresponds to the 21 cm line in radio astronomy.

## Conclusion

Time-independent perturbation theory provides a systematic approach to finding approximate solutions to quantum mechanical problems that cannot be solved exactly. By treating complex interactions as small perturbations to solvable systems, this method has enabled significant advances in our understanding of atomic and molecular structure, spectroscopy, and quantum phenomena in solid-state physics.

While the method has limitations, particularly when perturbations are not small, it remains one of the most important analytical tools in quantum mechanics. For stronger perturbations, more advanced techniques such as variational methods, WKB approximation, or numerical approaches may be required.
