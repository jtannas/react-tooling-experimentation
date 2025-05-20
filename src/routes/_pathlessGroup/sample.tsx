import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessGroup/sample")({
	component: Sample,
});

function Sample() {
	return (
		<div className="p-2">
			Hello from Sample!
			<Link className="block text-blue-800" to="." hash="targeted-id">
				Link to a specific element
			</Link>
			<p className="w-50">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ipsum
				ac lectus lobortis congue eget nec nulla. Vivamus ac felis posuere,
				tempor dolor nec, finibus eros. Maecenas sollicitudin gravida viverra.
				Fusce finibus scelerisque porta. Morbi tincidunt metus vitae fermentum
				venenatis. Ut imperdiet vehicula ligula, id interdum augue consectetur
				eu. Fusce viverra, tellus a auctor volutpat, arcu eros malesuada turpis,
				pharetra condimentum lacus purus nec velit. Fusce tempus dui ac urna
				mollis aliquet. Aenean aliquet et ipsum scelerisque iaculis. Duis
				mollis, enim at gravida iaculis, neque ante suscipit mauris, id placerat
				tellus arcu eget purus. Donec dignissim ut nisl eget iaculis. Nullam
				accumsan lectus in accumsan laoreet. In aliquet lorem non tortor rutrum,
				vitae egestas ipsum ornare. Integer non rutrum metus. Nam hendrerit
				vestibulum sapien vel egestas. Proin dictum nunc nisl. Nulla vitae
				dapibus purus, accumsan laoreet sem. Nullam a risus sit amet enim auctor
				blandit. Curabitur non sapien cursus, pharetra ex eu, placerat augue.
				Fusce sed nisi sit amet enim sodales rhoncus. Fusce metus nisi,
				fermentum sed sagittis vel, ullamcorper nec mauris. Aliquam sed ex
				egestas, malesuada magna sit amet, fringilla libero. Pellentesque diam
				dolor, sodales ut pulvinar rhoncus, volutpat porttitor quam. Morbi
				dignissim venenatis turpis, a scelerisque ligula suscipit feugiat. Duis
				feugiat orci quis velit dignissim accumsan. Aliquam hendrerit rhoncus
				ante, ac tempus mauris ornare eget. Quisque aliquet maximus dolor sed
				sodales. Vivamus eu ultrices nibh. Nulla pulvinar felis sit amet porta
				condimentum. Ut urna arcu, imperdiet at dolor quis, placerat accumsan
				leo. Nullam auctor, nibh eu pulvinar dapibus, felis purus viverra
				turpis, posuere semper lacus mi eget orci. Cras dapibus, quam nec
				tincidunt ullamcorper, odio lectus dictum ligula, sodales pulvinar
				turpis tortor sed elit. Nulla dapibus dui lectus, at ultrices augue
				sodales id. Proin quis ante sit amet justo eleifend tempor. Maecenas at
				vehicula ligula. Etiam non diam sit amet justo imperdiet fringilla id
				posuere odio. Morbi sit amet aliquam libero. Ut tincidunt felis a
				vehicula efficitur. Cras eget tincidunt ipsum, in imperdiet ex. Sed
				luctus sapien id nunc tempor, sed suscipit quam lobortis. Fusce ultrices
				pellentesque enim sed auctor. Sed eget vulputate quam, in vulputate
				elit. Aenean non mollis lorem. Mauris interdum enim vel interdum
				consectetur. Quisque nec iaculis justo. Cras consequat molestie
				sollicitudin. Etiam in lobortis nibh, non commodo nisi. Praesent
				efficitur, sapien vel efficitur maximus, purus elit semper ligula, et
				eleifend quam libero non erat. Suspendisse elit nibh, posuere et odio
				in, lobortis ornare enim. Ut suscipit nisi sed arcu fermentum tempor.
				Orci varius natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Nam congue, leo et condimentum porta, ipsum quam congue
				eros, ut rutrum risus mi vitae eros. Duis egestas convallis risus, eu
				venenatis lectus volutpat suscipit. Vestibulum hendrerit dolor sed velit
				facilisis, eget accumsan lorem accumsan. In hac habitasse platea
				dictumst. In pretium ipsum non ultrices ornare. Cras venenatis, augue
				eget placerat molestie, orci ligula porta risus, vel consectetur tortor
				turpis non nunc. Proin aliquam mauris dolor, quis tristique felis
				dignissim in. Nulla pretium lectus sit amet urna lobortis congue. Nunc
				blandit porta malesuada. Morbi nec leo purus. Integer id ipsum eu odio
				placerat lacinia. Pellentesque laoreet vitae nibh a ullamcorper. Nunc
				non eros aliquet, hendrerit purus ac, pellentesque est. Aliquam
				scelerisque nunc placerat dolor tempor commodo. Quisque bibendum, ex eu
				eleifend aliquet, lectus sem dictum turpis, sed consequat augue diam id
				nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				accumsan quam ac erat dignissim mollis.
			</p>
			<h1 className="py-10" id="targeted-id">
				Hash Link Target
			</h1>
		</div>
	);
}
