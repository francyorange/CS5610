import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await dao.deleteAssignment(assignmentId);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(assignmentUpdates);
        res.send(status);
    });

}
