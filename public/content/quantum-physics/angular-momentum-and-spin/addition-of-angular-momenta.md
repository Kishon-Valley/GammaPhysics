## Addition of Angular Momenta in Quantum Mechanics

### Introduction 


Angular momentum addition is a fundamental concept in quantum mechanics that describes how different sources of angular momentum combine in a quantum system. This process is essential for understanding atomic structure, molecular bonding, and nuclear physics.

## Fundamental Principles

In quantum mechanics, when a system contains multiple sources of angular momentum, these must be combined according to the rules of quantum mechanics rather than simply adding the vectors as in classical physics.

The two main types of angular momentum in quantum systems are:

1. **Orbital angular momentum** ($\vec{L}$): Arising from the spatial distribution and motion of particles
2. **Spin angular momentum** ($\vec{S}$): An intrinsic property of particles with no classical analog

![Angular Momentum Types](/images/quantum-physics/spin-systems/angular-momentum-types.svg)

## Mathematical Formulation

When combining two angular momenta $\vec{J}_1$ and $\vec{J}_2$ (which could be orbital, spin, or total angular momenta), the total angular momentum $\vec{J}$ is given by:

$$\vec{J} = \vec{J}_1 + \vec{J}_2$$

However, in quantum mechanics, we must consider the quantum numbers rather than the vectors themselves. If $j_1$ and $j_2$ are the angular momentum quantum numbers for the two systems, then the possible values of the total angular momentum quantum number $j$ are:

$$j = |j_1 - j_2|, |j_1 - j_2| + 1, \ldots, j_1 + j_2 - 1, j_1 + j_2$$

This is known as the **triangle rule** because it's equivalent to saying that $j_1$, $j_2$, and $j$ must be able to form a triangle.

## Clebsch-Gordan Coefficients

The transformation between the uncoupled basis $|j_1, m_1; j_2, m_2\rangle$ and the coupled basis $|j, m\rangle$ is given by Clebsch-Gordan coefficients:

$$|j, m\rangle = \sum_{m_1, m_2} C^{j, m}_{j_1, m_1; j_2, m_2} |j_1, m_1; j_2, m_2\rangle$$

where $C^{j, m}_{j_1, m_1; j_2, m_2}$ are the Clebsch-Gordan coefficients, which are non-zero only when:

- $m = m_1 + m_2$
- $j$ satisfies the triangle rule: $|j_1 - j_2| \leq j \leq j_1 + j_2$

These coefficients can be calculated using various formulas or looked up in tables for common values.

![Clebsch-Gordan Coefficients](/images/quantum-physics/spin-systems/clebsch-gordan.svg)

## Examples of Angular Momentum Addition

### Addition of Two Spin-1/2 Particles

When combining two spin-1/2 particles, each with $s = 1/2$, the possible values for the total spin $S$ are:

$$S = |s_1 - s_2|, \ldots, s_1 + s_2 = |1/2 - 1/2|, \ldots, 1/2 + 1/2 = 0, 1$$

This gives us a singlet state ($S = 0$) and a triplet state ($S = 1$):

**Singlet state** ($S = 0, M_S = 0$):
$$|0,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)$$

**Triplet states** ($S = 1$):
$$|1,1\rangle = |\uparrow\uparrow\rangle$$
$$|1,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)$$
$$|1,-1\rangle = |\downarrow\downarrow\rangle$$

The singlet state is antisymmetric under particle exchange, while the triplet states are symmetric.

### Spin-Orbit Coupling

In atoms, the interaction between an electron's orbital angular momentum $\vec{L}$ and its spin angular momentum $\vec{S}$ leads to the total angular momentum $\vec{J} = \vec{L} + \vec{S}$.

For a given $l$ and $s = 1/2$ (for an electron), the possible values of $j$ are:

$$j = |l - s|, \ldots, l + s = l - 1/2, l + 1/2$$

This splitting of energy levels due to spin-orbit coupling is responsible for the fine structure in atomic spectra.

![Spin-Orbit Coupling](/images/quantum-physics/spin-systems/spin-orbit-coupling.svg)

## Addition of Angular Momenta in Multi-Electron Atoms

In multi-electron atoms, we need to consider how the angular momenta of all electrons combine. There are two main coupling schemes:

### LS Coupling (Russell-Saunders Coupling)

In lighter atoms, the electrostatic interactions between electrons are stronger than the spin-orbit coupling. In this case:

1. The orbital angular momenta of individual electrons couple to form a total orbital angular momentum $\vec{L} = \sum_i \vec{l}_i$
2. The spin angular momenta couple to form a total spin angular momentum $\vec{S} = \sum_i \vec{s}_i$
3. Finally, $\vec{L}$ and $\vec{S}$ couple to form the total angular momentum $\vec{J} = \vec{L} + \vec{S}$

The resulting states are labeled using term symbols: $^{2S+1}L_J$, where $2S+1$ is the multiplicity, $L$ is represented by a letter (S, P, D, F, etc. for $L = 0, 1, 2, 3, \ldots$), and $J$ is the total angular momentum quantum number.

### jj Coupling

In heavier atoms, the spin-orbit coupling for each electron is stronger than the electrostatic interactions between electrons. In this case:

1. For each electron, its orbital angular momentum $\vec{l}_i$ couples with its spin $\vec{s}_i$ to form an individual total angular momentum $\vec{j}_i = \vec{l}_i + \vec{s}_i$
2. These individual $\vec{j}_i$ then couple to form the total angular momentum $\vec{J} = \sum_i \vec{j}_i$

## Applications in Quantum Systems

### Nuclear Shell Model

In the nuclear shell model, protons and neutrons fill energy levels according to the Pauli exclusion principle. The total angular momentum of a nucleus is determined by the addition of angular momenta of all nucleons.

### Molecular Spectroscopy

In molecules, the coupling of angular momenta determines the rotational energy levels and selection rules for transitions, which are essential for interpreting molecular spectra.

### Quantum Computing

In quantum computing, multiple qubits (which can be implemented using spin-1/2 particles) are combined to form a quantum register. The states of this register can be understood in terms of the addition of angular momenta.

## Practice Problems

### Problem 1: Addition of Two Spin-1 Particles

**Question:** What are the possible values of the total spin quantum number $S$ when combining two particles each with spin $s = 1$?

**Answer:** Using the rule $S = |s_1 - s_2|, |s_1 - s_2| + 1, \ldots, s_1 + s_2$:
$$S = |1 - 1|, |1 - 1| + 1, \ldots, 1 + 1 = 0, 1, 2$$

So the possible values are $S = 0, 1, 2$, giving a singlet state, a triplet state, and a quintet state.

### Problem 2: Clebsch-Gordan Coefficient

**Question:** Calculate the Clebsch-Gordan coefficient $C^{1,0}_{1/2,1/2;1/2,-1/2}$ for combining two spin-1/2 particles.

**Answer:** This coefficient represents the contribution of the state $|1/2,1/2;1/2,-1/2\rangle$ to the coupled state $|1,0\rangle$.

Using the formula for this specific case:
$$C^{1,0}_{1/2,1/2;1/2,-1/2} = \frac{1}{\sqrt{2}}$$

This means that the state $|1,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)$ has equal contributions from $|\uparrow\downarrow\rangle$ and $|\downarrow\uparrow\rangle$.

### Problem 3: Total Angular Momentum in an Atom

**Question:** An electron in the $p$ orbital ($l = 1$) of an atom has spin $s = 1/2$. What are the possible values of the total angular momentum quantum number $j$?

**Answer:** Using the rule $j = |l - s|, \ldots, l + s$:
$$j = |1 - 1/2|, \ldots, 1 + 1/2 = 1/2, 3/2$$

So the possible values are $j = 1/2, 3/2$, corresponding to the $p_{1/2}$ and $p_{3/2}$ states in spectroscopic notation.

### Problem 4: Degeneracy in Combined Angular Momentum States

**Question:** When combining a system with $j_1 = 2$ and a system with $j_2 = 3/2$, what is the total number of states in the combined system?

**Answer:** For $j_1 = 2$, there are $2j_1 + 1 = 5$ states. For $j_2 = 3/2$, there are $2j_2 + 1 = 4$ states. The total number of states in the combined system is the product:
$$(2j_1 + 1) \times (2j_2 + 1) = 5 \times 4 = 20 \text{ states}$$

These 20 states can be regrouped according to the total angular momentum values $j = |j_1 - j_2|, |j_1 - j_2| + 1, \ldots, j_1 + j_2 = 1/2, 3/2, 5/2, 7/2$. The sum of the degeneracies $(2j + 1)$ for each of these $j$ values equals 20.

### Problem 5: Magnetic Quantum Numbers in Combined Systems

**Question:** When a state with $j_1 = 1, m_1 = 0$ is combined with a state with $j_2 = 1/2, m_2 = 1/2$, what are the possible values of the total angular momentum $j$ and the corresponding magnetic quantum number $m$?

**Answer:** The possible values of $j$ are given by $j = |j_1 - j_2|, \ldots, j_1 + j_2 = |1 - 1/2|, \ldots, 1 + 1/2 = 1/2, 3/2$.

The magnetic quantum number $m = m_1 + m_2 = 0 + 1/2 = 1/2$.

So we have two possible combined states:
- $|j=1/2, m=1/2\rangle$
- $|j=3/2, m=1/2\rangle$

### Problem 6: Addition of Identical Particles

**Question:** Two identical spin-1 bosons are in a symmetric spatial state. What are the allowed values of their total spin $S$?

**Answer:** For identical bosons, the total wavefunction must be symmetric under particle exchange. Since the spatial part is symmetric, the spin part must also be symmetric.

For two spin-1 particles, the possible values of total spin are $S = |s_1 - s_2|, \ldots, s_1 + s_2 = |1-1|, \ldots, 1+1 = 0, 1, 2$.

The symmetric spin states correspond to $S = 0, 2$ (even values), while $S = 1$ gives an antisymmetric spin state. Since we need a symmetric spin state for bosons with a symmetric spatial state, the allowed values are $S = 0, 2$.

### Problem 7: Hydrogen Atom Fine Structure

**Question:** In the hydrogen atom, the $n=2$ energy level includes the $2s$ and $2p$ orbitals. When spin-orbit coupling is considered, how many distinct energy levels result, and what are their spectroscopic terms?

**Answer:** For the $n=2$ level:
- The $2s$ orbital has $l=0$. With electron spin $s=1/2$, the total angular momentum is $j=1/2$ (only one possibility).
- The $2p$ orbital has $l=1$. With electron spin $s=1/2$, the total angular momentum can be $j=1/2$ or $j=3/2$.

This gives three distinct energy levels with the following spectroscopic terms:
- $2s_{1/2}$ (denoted as $^2S_{1/2}$)
- $2p_{1/2}$ (denoted as $^2P_{1/2}$)
- $2p_{3/2}$ (denoted as $^2P_{3/2}$)

Where the superscript 2 indicates the multiplicity $(2S+1)$ with $S=1/2$.

### Problem 8: Clebsch-Gordan Series

**Question:** Express the direct product of two irreducible representations of $SU(2)$ with $j_1 = 1$ and $j_2 = 1$ as a sum of irreducible representations.

**Answer:** The direct product $j_1 \otimes j_2$ decomposes into a sum of irreducible representations with $j$ ranging from $|j_1 - j_2|$ to $j_1 + j_2$. For $j_1 = j_2 = 1$:
$$j = |1-1|, |1-1|+1, \ldots, 1+1 = 0, 1, 2$$

So the decomposition is:
$$1 \otimes 1 = 0 \oplus 1 \oplus 2$$

In terms of dimensions, this is $(2j_1+1)(2j_2+1) = (2\times 1+1)(2\times 1+1) = 3 \times 3 = 9$, which equals $(2\times 0+1) + (2\times 1+1) + (2\times 2+1) = 1 + 3 + 5 = 9$.

### Problem 9: Wigner-Eckart Theorem Application

**Question:** Using the Wigner-Eckart theorem, explain why the electric dipole moment operator cannot induce transitions between states with the same parity.

**Answer:** The electric dipole moment operator $\vec{d} = e\vec{r}$ transforms as a vector (rank-1 tensor) under rotations and has odd parity. According to the Wigner-Eckart theorem, the matrix element $\langle j_f, m_f |\vec{d}| j_i, m_i \rangle$ can be non-zero only if:

1. The angular momentum selection rules are satisfied: $|j_i - 1| \leq j_f \leq j_i + 1$
2. The parity selection rule is satisfied: the initial and final states must have opposite parity

Since the electric dipole operator has odd parity, and parity multiplication follows $(\text{even} \times \text{odd} = \text{odd})$ and $(\text{odd} \times \text{odd} = \text{even})$, the transition matrix element will be non-zero only when the initial and final states have opposite parity. Therefore, electric dipole transitions between states with the same parity are forbidden.

### Problem 10: Addition of Angular Momenta in Nuclear Shell Model

**Question:** In the nuclear shell model, a nucleus has a single proton in the $1d_{5/2}$ orbital and a single neutron in the $1f_{7/2}$ orbital. What are the possible values of the total angular momentum $J$ for this nucleus?

**Answer:** The proton has angular momentum $j_p = 5/2$ and the neutron has angular momentum $j_n = 7/2$. The possible values of the total angular momentum $J$ are given by:
$$J = |j_p - j_n|, |j_p - j_n| + 1, \ldots, j_p + j_n = |5/2 - 7/2|, \ldots, 5/2 + 7/2 = 1, 2, 3, 4, 5, 6$$

So the nucleus can have total angular momentum $J = 1, 2, 3, 4, 5,$ or $6$, with corresponding degeneracies $2J + 1 = 3, 5, 7, 9, 11,$ and $13$.

## Conclusion

The addition of angular momenta is an important concept in quantum mechanics with far-reaching implications across various fields of physics. Understanding how angular momenta combine according to quantum mechanical rules is essential for predicting the behavior of complex quantum systems, from atoms and molecules to nuclei and elementary particles. The mathematical framework, particularly the Clebsch-Gordan coefficients, provides a powerful tool for analyzing these systems and interpreting experimental observations.
