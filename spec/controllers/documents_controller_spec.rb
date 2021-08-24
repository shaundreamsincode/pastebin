require "rails_helper"

describe DocumentsController, type: :controller do
  describe "#create" do
    let!(:trigger!) { post "/api/v1/documents", params: { body: "asdf" } }

    it "creates a new document" do
      expect { trigger! }.to change { Document.count }.from(0).to(1)
    end

    it "assigns the correct body on the document" do
      trigger!
      document = Document.first

      expect(document.body).to eq("asdf")
    end

    it "returns a 201 status" do
      trigger!
      expect(response.status).to eq(201)
    end
  end
end