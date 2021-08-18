module Api
  module V1
    class DocumentsController < ApiController
      def show
        @document = Document.find(params[:id])
        render plain: { body: @document.body }
      end

      def create
        @document = Document.create(body: document_params[:body])
        render json: { body: params[:body], id: @document.id }
      end

      private

      def document_params
        params.require(:document).permit(:body)
      end
    end
  end
end