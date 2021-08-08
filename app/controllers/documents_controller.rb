class DocumentsController < ApplicationController
  def create
  end

  private

  def document_params
    params.require(:document).permit(:body)
  end
end
