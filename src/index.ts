import { getProgramFromFiles, buildGenerator, Definition } from "typescript-json-schema";
import glob from "tiny-glob";

const moduleAlias = require("module-alias");
moduleAlias.addAlias("@", __dirname);

const notWorking = async (typeName: string): Promise<Definition | undefined> => {
    const path = "src/services/**/interfaces/*.interface.ts"; // These files contain imports with an @ alias
    const files = await glob(path);
    const program = getProgramFromFiles(files);
    const generator = buildGenerator(program);

    return generator?.getSchemaForSymbol(typeName);
};

const working = async (typeName: string): Promise<Definition | undefined> => {
    const path = "src/utils/interfaces/Address.interface.ts" // Does not contain custom imports
    const files = await glob(path);
    const program = getProgramFromFiles(files);
    const generator = buildGenerator(program);

    return generator?.getSchemaForSymbol(typeName);
};

notWorking("PersonInterface")
    .then(json => console.log(`Undefined, due to alias imports: ${json}`))
    .catch(err => console.error(err))

working("AddressInterface")
    .then(json => console.log(`Correct schema: ${JSON.stringify(json)}`))
    .catch(err => console.error(err))
