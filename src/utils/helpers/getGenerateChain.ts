import { Chain, getGenerationChain } from "@types";

export const getGenerateChain = (pokemonName: string, chainLink: Chain): getGenerationChain => {
    if (chainLink.species.name === pokemonName)
        return { prev: null, current: chainLink, next: chainLink.evolves_to };

    let chain: getGenerationChain;
    for (let i = 0; i < chainLink.evolves_to.length; i += 1) {
        const evolve = chainLink.evolves_to[i];
        if (evolve.species.name === pokemonName) {
            chain = { prev: chainLink, current: evolve, next: evolve.evolves_to};
            break;
        }
        chain = getGenerateChain(pokemonName, evolve);
    }


    // @ts-expect-error
    return chain;
};