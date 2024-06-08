import { createId } from "@paralleldrive/cuid2"
import { client } from "../models/client"
import { ITool } from "../types/entity"

export const toolServices = {
    getData: () => {
        const allTools = client.query(`
            SELECT 
                t.id as id,
                t.name as name,
                t.description as description,
                t.url as url,
                t.image as image,
                a.visits as visits
            FROM
                tools t 
            JOIN
                analytics a ON t.id = a.tool_id
        `).all()

        return allTools as ITool[]
    },
    createData: ({name, description, url, image, category}: Omit<ITool,'id'|'visits'|'verified'|'isPublic') => {
        const toolId = createId()
        const analyticId = createId()

        client.query(`
            INSERT INTO tools (id, name, description, url, image, category, verified, is_public)
            VALUES ('${toolId}', '${name}', '${description}', '${url}', '${image}', '${category}', 0, 0)
        `).run()

        client.query(`
            INSERT INTO analytics (id, tool_id)
            VALUES ('${analyticId}', '${toolId}')
        `).run()
    }
}