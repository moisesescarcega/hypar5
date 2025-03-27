<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<script lang="ts">
	import { P, Span, Heading, Hr, Layout, Blockquote } from 'flowbite-svelte';

</script>
<div class="pt-16 z-[10] flex flex-col h-dvh p-6 overflow-y-auto bg-gradient-to-b from-blue-50 to-blue-200 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
	<Heading tag="h2" class="flex justify-center mx-auto">Hypar geometry of concrete shells</Heading>
	<Hr />
	<div class="w-full lg:w-3/5 flex flex-col mx-auto mb-6 gap-6">
		<Layout gap={6} cols="grid-cols-1 sm:grid-cols-3">
			<div class="col-span-2">
				<P>
					Félix Candela’s buildings were based on three premises: economy,
	simplicity, and flexibility in calculation. These notions were fulfilled
	through the hyperbolic paraboloid, which by its structural features
	almost exclusively transmits efforts to raise compression-resistant
	lamellar structures of minimal thickness, usually of 1 1/2 inches.
	As he developed new structures, Candela gained maturity and
	confidence that led to experimentation with shells never before
	seen. Despite having said that he did not seek originality per se,
	Candela achieved unprecedented spatial forms of great elegance that
	constituted technological challenges. He is considered a precursor to
	sustainable architecture for its commitment to developing economical
	and lasting works whose spaces and volumes stimulate emotional
	experiences.
				</P>
			</div>
			<Blockquote border class="p-4">
				"My main job is to simplify and standardize
the sketches they show me, and prove that
success is not based in building extravagant
forms, but in doing simple things and studying
the details with endearment."
				<div class="mt-2 text-right">
					<cite class="font-medium">Félix Candela</cite>
				</div>
			</Blockquote>
		</Layout>
		<Hr />
		<Heading tag="h3">Musical geometry</Heading>
		<Layout gap={6} cols="grid-cols-1 sm:grid-cols-2">
			<div class="col-span-1">
				<P>Félix Candela masterfully fused the three key components that defined his most iconic works: geometry (the hyperbolic paraboloid), material (reinforced concrete), and a construction process adapted to the Mexican context. In his designs, he skillfully exploited the structural and expressive qualities of the hyperbolic paraboloid (or <Span italic>hypar,</Span> as it is known in English). This geometric form is created through two sets of straight lines moving through space—directrices and generatrices—which generate ruled surfaces with double inverse curvature. These surfaces possess the unique ability to primarily transmit compressive forces, allowing for the construction of highly resistant thin-shell structures with minimal material thickness.</P>
			</div>
			<div class="col-span-1">
				<P>His first structure based on hypars was the Cosmic Rays Pavilion at Mexico City’s University Campus (1951). When applied with artistic vision in architectural design, the hyperbolic paraboloid’s versatile contours and fluid spatial movement allow for the creation of graceful, sinuous, and expressive forms—like a musical melody suspended in space and time.</P>
				<P>Hypar-based roof structures can be categorized into two main types: <Span underline>straight-edged</Span> shells and <Span underline>curved-edged</Span> shells. Once Candela identified a structural form that met functional and aesthetic needs, he pursued continuous refinements to optimize future projects. In this process, he created extraordinarily elegant and lightweight structures, much like a composer who, having discovered a source of inspiration, develops “variations on a theme” to push artistic and technical boundaries further.</P>
			</div>
		</Layout>
		<Hr />
		<Heading tag="h3">Building the shell</Heading>
		<Layout gap={6} cols="grid-cols-1 sm:grid-cols-2">
			<div class="col-span-1">
				<P>Candela’s projects were guided by three fundamental principles: structural logic, efficiency, and economy. Once the geometry was defined and the structural calculations completed, the key to the construction process of his thin-shell structures lay in the intricate assembly of the formwork. This was crafted using long, straight wooden strips, arranged to create the ruled surface with double inverse curvature characteristic of hyperbolic paraboloids. Over this wooden mold, a grid of thin steel rebar was carefully placed, followed by the pouring of concrete. Once the mixture had set, the formwork was removed, and the shell took its final shape.</P>
			</div>
			<div class="col-span-1">
				<P>The construction of these structures required highly skilled carpenters to build the formwork and large teams of masons to complete the process. The result was a self-supporting structure, held together solely by its form, free of additional structural elements that could disrupt its graceful aesthetic. Lightly resting on the ground, these shells gave the illusion of weightlessness, as if they were floating effortlessly.</P>
				<P>As Candela continued to build new structures, he gained greater confidence and expertise, leading him to experiment with increasingly bold and daring shell designs. He is regarded as a pioneer of sustainable architecture, as his cost-effective, long-lasting designs used minimal materials while generating spaces and volumes that evoked deep emotional experiences. Among the most efficient types of shell structures he developed were the <Span italic>umbrella-shaped</Span> shells and <Span italic>groin vaults.</Span></P>
			</div>
		</Layout>
		<Hr />
		<Heading tag="h3">Groin Vaults with Hypars</Heading>
		<Layout gap={6} cols="grid-cols-1 sm:grid-cols-2">
			<div class="col-span-1">
				<P>Some of Félix Candela’s most inspired works belong to the category of curved-edged shells, specifically to the family of groin vaults constructed with hyperbolic paraboloids (hypars). This ingenious structural solution emerged from Candela’s collaboration with architects Enrique de la Mora and Fernando López Carmona. It was inspired by the traditional groin vault, an architectural form invented by the Romans, in which two barrel vaults intersect perpendicularly to create a ribless groin vault, supported at its four isolated corners without the need for additional reinforcements.</P>
			</div>
			<div class="col-span-1">
				<P>The first example of this type was built for the Auction Hall of the Mexican Stock Exchange (1953). The rectangular roof was designed by intersecting two saddle-shaped hypars. When structural engineers initially deemed it unbuildable, De la Mora consulted Candela, who immediately recognized its brilliance. This pioneering work was followed by several variations, including the San Antonio de las Huertas Church (1956, the first project to incorporate a "free edge"), the La Jacaranda cabaret (1957), the Los Manantiales restaurant (1958), the Bacardí bottling plant (1958), the restaurant at the Casino de la Selva Hotel (1959), and the sales pavilion of the Verde Valle housing development (1963).</P>
				<P>The groin vault with hypars represents a significant Mexican contribution to the history of construction. Furthermore, with the introduction of the "free edge" variation, Candela achieved one of the greatest aesthetic milestones in the field of thin-shell structures.</P>
			</div>
		</Layout>
	</div>
</div>

<style lang="postcss">
:global(html) {
/* font-family: 'Trebuchet MS', sans-serif; */
}
</style>